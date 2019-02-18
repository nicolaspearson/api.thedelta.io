-- The database is created by the docker-compose.yml
-- entrypoint using the credentials specified in the env varaibles
SET search_path TO thedelta;

CREATE SCHEMA IF NOT EXISTS contact;

BEGIN;

CREATE TABLE IF NOT EXISTS contact.contact_us (
	id SERIAL NOT NULL,
	first_name character varying(255),
	last_name character varying(255),
	email_address character varying(255),
	"message" character varying,
	created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
	deleted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
	PRIMARY KEY (id)
);

COMMIT;
