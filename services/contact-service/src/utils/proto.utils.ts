import { ContactUs } from '@models/contact-us.model';
import { ContactUs as ContactUsProto } from '@proto/contact_pb';

export function contactUsTransformToProto(contactUs: ContactUs): ContactUsProto {
	const contactUsProto: ContactUsProto = new ContactUsProto();
	contactUsProto.setId(contactUs.id);
	contactUsProto.setFirstName(contactUs.firstName);
	contactUsProto.setLastName(contactUs.lastName);
	contactUsProto.setEmailAddress(contactUs.emailAddress);
	contactUsProto.setMessage(contactUs.message);
	return contactUsProto;
}

export function contactUsTransformFromProto(contactUsProto: ContactUsProto): ContactUs {
	const contactUs: ContactUs = new ContactUs();
	contactUs.id = contactUsProto.getId();
	contactUs.firstName = contactUsProto.getFirstName();
	contactUs.lastName = contactUsProto.getLastName();
	contactUs.emailAddress = contactUsProto.getEmailAddress();
	contactUs.message = contactUsProto.getMessage();
	return contactUs;
}
