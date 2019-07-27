
-- table of users listed
CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name text,
	password text
);
\! echo "\nusers table created\n";

-- table of apartments listed
CREATE TABLE IF NOT EXISTS tweeds (
	id SERIAL PRIMARY KEY,
	tweed text
);
\! echo "\ntweeds table created\n";

-- table of guests linked listed
CREATE TABLE IF NOT EXISTS user_tweeds (
	id SERIAL PRIMARY KEY,
	user_id integer,
	tweed_id text
);
\! echo "\nuser_tweeds table created\n";