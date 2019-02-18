import { BaseRepository } from 'grpc-typeorm-infrastructure';

import { ContactUs } from '@models/contact-us.model';

export default class ContactUsRepository extends BaseRepository<ContactUs> {
	constructor() {
		super(ContactUs.name);
	}
}
