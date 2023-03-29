CREATE TABLE mytable (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

INSERT INTO mytable (name) VALUES ('John');
INSERT INTO mytable (name) VALUES ('Jane');
INSERT INTO mytable (name) VALUES ('Rifqi');