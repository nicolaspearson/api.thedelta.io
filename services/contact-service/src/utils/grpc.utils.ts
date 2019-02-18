import { Metadata, MetadataValue, sendUnaryData, ServerUnaryCall } from 'grpc';
import GrpcBoom from 'grpc-boom';

export function handleError(callback: sendUnaryData<any>, error: any) {
	if (error && error.isBoom) {
		const boom = GrpcBoom.boomify(error);
		const metadata = new Metadata();
		if (boom.metadata) {
			const map = boom.metadata.getMap();
			Object.keys(map).forEach((key: string) => {
				const value = map[key];
				metadata.add(key, value);
			});
		}
		boom.metadata = metadata;
		callback(boom, null);
		return;
	}
	const grpcBoom: GrpcBoom = GrpcBoom.internal('An unknown error occurred');
	callback(grpcBoom, null);
}

export function getMetadataValue(
	call: ServerUnaryCall<any>,
	name: string
): MetadataValue | undefined {
	if (call && call.metadata) {
		const metadata = call.metadata.getMap();
		return metadata[name];
	}
	return undefined;
}
