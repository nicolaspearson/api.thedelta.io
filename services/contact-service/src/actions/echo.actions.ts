import { sendUnaryData, ServerUnaryCall } from 'grpc';

import { EchoReply, EchoRequest } from '@proto/contact_pb';

export class EchoActions {
	public static instance: EchoActions;

	constructor() {
		EchoActions.instance = this;
	}

	public getActionMap() {
		return {
			echo: this.doEcho
		};
	}

	public doEcho(call: ServerUnaryCall<EchoRequest>, callback: sendUnaryData<EchoReply>) {
		const reply = new EchoReply();
		reply.setMessage(call.request.getMessage());
		callback(null, reply);
	}
}
