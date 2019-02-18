import GrpcBoom from 'grpc-boom';
import { BaseService } from 'grpc-typeorm-infrastructure';

import { ContactUs } from '@models/contact-us.model';
import ContactUsRepository from '@repositories/contact-us.repository';

export default class ContactUsService extends BaseService<ContactUs> {
	constructor(private contactUsRepository: ContactUsRepository) {
		super(contactUsRepository);
	}

	public preSaveHook(contactUs: ContactUs): void {
		// Executed before the save repository call
	}

	public preUpdateHook(contactUs: ContactUs) {
		// Executed before the update repository call
		delete contactUs.updatedAt;
	}

	public async softDelete(id: number): Promise<ContactUs> {
		try {
			if (!ContactUs.validId(id)) {
				throw GrpcBoom.invalidArgument('Incorrect / invalid parameters supplied');
			}
			// Do a soft delete
			const contactUsResult: ContactUs = await this.contactUsRepository.findOneById(id);
			contactUsResult.deletedAt = new Date();

			await this.contactUsRepository.save(contactUsResult);
			return contactUsResult.sanitize();
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.internal(error);
		}
	}
}
