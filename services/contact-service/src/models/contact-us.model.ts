import { IsEmail, Length, validate, ValidationArguments, ValidationError } from 'class-validator';
import { Metadata } from 'grpc';
import GrpcBoom from 'grpc-boom';
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'contact_us' })
export class ContactUs {
	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ name: 'first_name', length: 255 })
	@Length(1, 255, {
		message: (args: ValidationArguments) => {
			return ContactUs.getGenericValidationLengthMessage(args);
		}
	})
	public firstName: string;

	@Column({ name: 'last_name', length: 255 })
	@Length(1, 255, {
		message: (args: ValidationArguments) => {
			return ContactUs.getGenericValidationLengthMessage(args);
		}
	})
	public lastName: string;

	@Column({ name: 'email_address', length: 255 })
	@IsEmail(undefined, {
		message: 'Must be a valid email address'
	})
	public emailAddress: string;

	@Column({ name: 'message', length: 255 })
	@Length(1, 5000, {
		message: (args: ValidationArguments) => {
			return ContactUs.getGenericValidationLengthMessage(args);
		}
	})
	public message: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
	public createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
	public updatedAt: Date;

	@Column({ name: 'deleted_at', type: 'timestamp with time zone' })
	public deletedAt: Date;

	public static newContactUs(obj: {
		id?: number;
		firstName?: string;
		lastName?: string;
		emailAddress?: string;
		message?: string;
		createdAt?: Date;
		updatedAt?: Date;
		deletedAt?: Date;
	}) {
		const newContactUs = new ContactUs();
		if (obj.id) {
			newContactUs.id = obj.id;
		}
		if (obj.firstName) {
			newContactUs.firstName = obj.firstName;
		}
		if (obj.lastName) {
			newContactUs.lastName = obj.lastName;
		}
		if (obj.emailAddress) {
			newContactUs.emailAddress = obj.emailAddress;
		}
		if (obj.message) {
			newContactUs.message = obj.message;
		}
		if (obj.createdAt) {
			newContactUs.createdAt = obj.createdAt;
		}
		if (obj.updatedAt) {
			newContactUs.updatedAt = obj.updatedAt;
		}
		if (obj.deletedAt) {
			newContactUs.deletedAt = obj.deletedAt;
		}
		return newContactUs;
	}

	public static validId(id: number): boolean {
		return id !== undefined && id > 0;
	}

	public async isValid(): Promise<boolean> {
		try {
			const errors: ValidationError[] = await validate(this, {
				validationError: { target: false, value: false }
			});
			if (errors.length > 0) {
				const metadata = new Metadata();
				for (const item of errors) {
					if (item.property && item.constraints) {
						let value: string = 'Unknown error';
						for (const val of Object.values(item.constraints)) {
							value = val;
							break;
						}
						metadata.add(item.property, value);
					}
				}
				throw GrpcBoom.invalidArgument('Validation failed on the provided request', metadata);
			}
			return true;
		} catch (error) {
			if (error && error.isBoom) {
				throw error;
			}
			throw GrpcBoom.invalidArgument('Unable to validate request: ' + error);
		}
	}

	public sanitize(): ContactUs {
		delete this.createdAt;
		delete this.updatedAt;
		delete this.deletedAt;
		return this;
	}

	public static getGenericValidationLengthMessage(args: ValidationArguments) {
		const chars: any = args.value !== undefined ? args.value.length : args.constraints[0];
		return 'Incorrect length: Found ' + chars + ' characters';
	}
}
