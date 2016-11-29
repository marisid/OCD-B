BEGIN;

DROP TABLE IF EXISTS users cascade;

CREATE TABLE users (
  user_id   SERIAL    PRIMARY KEY   NOT NULL,
  username    VARCHAR(15)   NOT NULL,
  password    VARCHAR(15)   NOT NULL,
  experience    VARCHAR(10)
);

INSERT INTO users (username, password, experience) VALUES ('esraajb', 'wilco23', 'beginner');
INSERT INTO users (username, password, experience) VALUES ('marisid', 'kos91', 'beginner');
INSERT INTO users (username, password, experience) VALUES ('msachi', 'donut10', 'advanced');
INSERT INTO users (username, password, experience) VALUES ('shireenzoaby', 'coffee04', 'beginner');

SELECT * FROM users;

COMMIT;
