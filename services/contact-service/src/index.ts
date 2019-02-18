import 'module-alias/register';
import 'reflect-metadata';

import * as grpc from 'grpc';
import {
	GrpcHealthCheck,
	HealthCheckRequest,
	HealthCheckResponse,
	HealthClient,
	HealthService
} from 'grpc-ts-health-check';
import GrpcMiddleware from 'grpc-ts-middleware';

import { ContactUsActions, EchoActions } from '@actions';
import { Database } from '@db/app.db';
import * as config from '@env';
import AppLogger from '@logger/app.logger';
import { ContactManagerService } from '@proto/contact_grpc_pb';
import ContactUsRepository from '@repositories/contact-us.repository';
import ContactUsService from '@services/contact-us.service';
import { SystemUtils } from '@utils/system.utils';

const serviceName = 'contact.ContactManager';
const healthCheckStatusMap = {
	serviceName: HealthCheckResponse.ServingStatus.UNKNOWN
};

// Setup environment config
config.init();

async function init() {
	// Setup the logger
	const appLogger = new AppLogger();
	appLogger.setupAppLogger();

	AppLogger.logger.debug('Waiting for database...');
	await SystemUtils.sleep(config.getServerConfig().DB_DELAY);

	// Connect to the database
	const database: Database = new Database();
	try {
		await database.setupDatabase();
	} catch (error) {
		AppLogger.logger.error(`Database connection failed: ${JSON.stringify(error)}`);
		throw error;
	}
}

function getGrpcLogLevel(): grpc.logVerbosity {
	const logLevel: string = config.getServerConfig().GRPC_LOG_LEVEL;
	if (logLevel === 'DEBUG') {
		return grpc.logVerbosity.DEBUG;
	} else if (logLevel === 'INFO') {
		return grpc.logVerbosity.INFO;
	}
	return grpc.logVerbosity.ERROR;
}

async function start(): Promise<grpc.Server> {
	try {
		await init();

		// Create the repositories and services
		const contactUsRepository = new ContactUsRepository();
		const contactUsService = new ContactUsService(contactUsRepository);

		// Create the server
		const server: grpc.Server = new grpc.Server();

		// Register service actions
		const contactUsActions = new ContactUsActions(contactUsService);
		const echoActions = new EchoActions();

		// Set the server log level
		grpc.setLogVerbosity(getGrpcLogLevel());

		// Create the middleware object
		const grpcMiddleware = new GrpcMiddleware(server);

		// Enable propagation of Jaeger tracing headers
		grpcMiddleware.enableTracing();

		// Add gRPC services that the middleware should monitor
		grpcMiddleware.addService(ContactManagerService, {
			...contactUsActions.getActionMap(),
			...echoActions.getActionMap()
		});

		// Register the health service
		const grpcHealthCheck = new GrpcHealthCheck(healthCheckStatusMap);
		grpcHealthCheck.setStatus(serviceName, HealthCheckResponse.ServingStatus.SERVING);
		server.addService(HealthService, grpcHealthCheck);

		// Bind the server
		const host: string = config.getServerConfig().GRPC_HOST;
		const port: string = config.getServerConfig().GRPC_PORT;
		server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure());

		// Start the server
		server.start();

		// Check the health status
		const healthClient = new HealthClient(`${host}:${port}`, grpc.credentials.createInsecure());
		const request = new HealthCheckRequest();
		request.setService(serviceName);
		healthClient.check(request, (error: Error | null, response: HealthCheckResponse) => {
			if (error) {
				AppLogger.logger.error('Contact Service: Health Check Failed', error);
			} else {
				AppLogger.logger.debug(`Contact Service: Health Check Status: ${response.getStatus()}`);
			}
		});

		AppLogger.logger.debug(`Contact Service: Listening: ${host}:${port}`);

		return server;
	} catch (error) {
		process.exit(1);
		throw error;
	}
}

start();
