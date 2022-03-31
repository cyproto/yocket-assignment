CREATE database yocket_assignment;
\c yocket_assignment;
CREATE TABLE events (
	id SERIAL PRIMARY KEY UNIQUE,
	name VARCHAR NOT NULL,
	start_datetime timestamptz NOT NULL,
	duration int NOT NULL,
	created_at timestamp NOT NULL DEFAULT NOW()
);