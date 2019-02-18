import { MetadataValue, sendUnaryData, ServerUnaryCall } from 'grpc';
import GrpcBoom from 'grpc-boom';

import { getServerConfig } from '@env';
import { ContactUs } from '@models/contact-us.model';
import {
	ContactUs as ContactUsProto,
	FindContactUsItemByEmailReply,
	FindContactUsItemByEmailRequest,
	SaveContactUsItemReply,
	SaveContactUsItemRequest
} from '@proto/contact_pb';
import ContactUsService from '@services/contact-us.service';
import * as GrpcUtils from '@utils/grpc.utils';
import * as ProtoUtils from '@utils/proto.utils';

export class ContactUsActions {
	public static instance: ContactUsActions;

	constructor(public contactUsService: ContactUsService) {
		ContactUsActions.instance = this;
	}

	public getActionMap() {
		return {
			findContactUsItemByEmail: this.doFindContactUsItemByEmail,
			saveContactUsItem: this.doSaveContactUsItem
		};
	}

	public async doFindContactUsItemByEmail(
		call: ServerUnaryCall<FindContactUsItemByEmailRequest>,
		callback: sendUnaryData<FindContactUsItemByEmailReply>
	) {
		try {
			callback(null, await ContactUsActions.instance.findContactUsItemByEmail(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	public async findContactUsItemByEmail(
		call: ServerUnaryCall<FindContactUsItemByEmailRequest>
	): Promise<FindContactUsItemByEmailReply> {
		const request: FindContactUsItemByEmailRequest = call.request;
		if (request.getEmailAddress() && request.getEmailAddress().length > 0) {
			const result: ContactUs = await ContactUsActions.instance.contactUsService.findOneByFilter({
				where: { emailAddress: request.getEmailAddress() }
			});
			const reply: FindContactUsItemByEmailReply = new FindContactUsItemByEmailReply();
			reply.setContactUs(ProtoUtils.contactUsTransformToProto(result));
			return reply;
		}
		throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
	}

	public async doSaveContactUsItem(
		call: ServerUnaryCall<SaveContactUsItemRequest>,
		callback: sendUnaryData<SaveContactUsItemReply>
	) {
		try {
			callback(null, await ContactUsActions.instance.saveContactUsItem(call));
		} catch (error) {
			GrpcUtils.handleError(callback, error);
		}
	}

	public async saveContactUsItem(
		call: ServerUnaryCall<SaveContactUsItemRequest>
	): Promise<SaveContactUsItemReply> {
		const request: SaveContactUsItemRequest = call.request;
		const accessToken: MetadataValue | undefined = GrpcUtils.getMetadataValue(
			call,
			'x-access-token'
		);
		if (!accessToken || accessToken.toString() !== getServerConfig().ACCESS_TOKEN) {
			throw GrpcBoom.unauthenticated('Invalid API token');
		}

		let firstName: string | undefined;
		let lastName: string | undefined;
		let emailAddress: string | undefined;
		let message: string | undefined;

		const contactUsProto: ContactUsProto | undefined = request.getContactUs();
		if (contactUsProto) {
			firstName = contactUsProto.getFirstName();
			lastName = contactUsProto.getLastName();
			emailAddress = contactUsProto.getEmailAddress();
			message = contactUsProto.getMessage();
		}

		if (firstName && lastName && emailAddress && message) {
			const result: ContactUs = await ContactUsActions.instance.contactUsService.save(
				ContactUs.newContactUs({ firstName, lastName, emailAddress, message })
			);
			const reply: SaveContactUsItemReply = new SaveContactUsItemReply();
			reply.setContactUs(ProtoUtils.contactUsTransformToProto(result));
			return reply;
		}
		throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
	}
}
