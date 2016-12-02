BEGIN;

DROP TABLE IF EXISTS users cascade;

CREATE TABLE users (
  user_id   SERIAL    PRIMARY KEY   NOT NULL,
  username    VARCHAR(100)   NOT NULL,
  password    VARCHAR(50)   NOT NULL,
  experience    VARCHAR(30)
);

INSERT INTO users (username, password, experience) VALUES ('esraajb', 'wilco23', 'beginner');
INSERT INTO users (username, password, experience) VALUES ('marisid', 'kos91', 'beginner');
INSERT INTO users (username, password, experience) VALUES ('msachi', 'donut10', 'advanced');
INSERT INTO users (username, password, experience) VALUES ('shireenzoaby', 'coffee04', 'beginner');

SELECT * FROM users;

DROP TABLE IF EXISTS resources cascade;

CREATE TABLE resources (
  resource_id   SERIAL  PRIMARY KEY  NOT NULL,
  title   VARCHAR(100)    NOT NULL,
  language    VARCHAR(100),
  source    VARCHAR(100)    NOT NULL,
  link    TEXT    NOT NULL
);

INSERT INTO resources (title, language, source, link) VALUES ('JavaScript: Understanding the Weird Parts', 'JavaScript', 'Udemy', 'https://www.udemy.com/understand-javascript/');
INSERT INTO resources (title, language, source, link) VALUES ('Learn to Program', 'Ruby', 'Chris Pine', 'https://pine.fm/LearnToProgram/');
INSERT INTO resources (title, language, source, link) VALUES ('CS50: Introduction to Computer Science', 'multiple', 'edX - Harvard Univerity', 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x');
INSERT INTO resources (title, language, source, link) VALUES ('Codecademy Python course', 'Python', 'Codecademy', 'https://www.codecademy.com/learn/python');

SELECT * FROM resources;

DROP TABLE IF EXISTS reviews cascade;

CREATE TABLE reviews (
  review_id   SERIAL  PRIMARY KEY  NOT NULL,
  time_stamp    BIGINT    NOT NULL,
  rating    SMALLINT,
  summary   VARCHAR(200)    NOT NULL,
  description   TEXT,
  user_id   INTEGER    REFERENCES users(user_id),
  resource_id   INTEGER    REFERENCES resources(resource_id)
);

INSERT INTO reviews (time_stamp, rating, summary, description, user_id, resource_id) VALUES (1480521059767, 5, 'Highly recommended to all JavaScript developers' , 'A great in-depth JavaScript course that really explains how the language works under the hood. The only downside is the slow pace of the videos.' , 3, 1);
INSERT INTO reviews (time_stamp, rating, summary, description, user_id, resource_id) VALUES (1480521068767, 5, 'Great intro to Computer Science at your own pace' , 'I loved the extensive material including videos, walkthroughs, articles and problem sets. All the CS50 staff are awesome in teaching you the CS fundamentals and problem sets are demanding but extremely useful!' , 2, 3);
INSERT INTO reviews (time_stamp, rating, summary, description, user_id, resource_id) VALUES (1480521078767, 2, 'Not very useful' , 'It was all copy-pasting and I didn"t feel like I learnt much', 4, 4);
INSERT INTO reviews (time_stamp, rating, summary, description, user_id, resource_id) VALUES (1480521058767, 3, 'Example summary' , 'Example description', 4, 4);

SELECT * FROM reviews;

COMMIT;
