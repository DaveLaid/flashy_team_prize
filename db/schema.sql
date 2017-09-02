### Flashcards Schema

CREATE DATABASE flashcards_db;

USE flashcards_db;


CREATE TABLE users
(
	user_id int NOT NULL AUTO_INCREMENT,
	displayname varchar(255) NOT NULL,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (user_id)
);

SELECT * FROM users;

INSERT INTO users (name, email, password, createdAt, updatedAt) VALUES ('David Laidlaw', 'davidlaidlaw15@gmail.com', 'david', '20170901', '20170901');


CREATE TABLE sets
(
	set_id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	url varchar(255) NOT NULL,
	PRIMARY KEY (set_id)
);

SELECT * FROM sets;

INSERT INTO sets (title, url, createdAt, updatedAt) VALUES ('Math 101', 'www.flashy.com/flashcards/1', '20170901', '20170901');


CREATE TABLE flashcards
(
	flash_id int NOT NULL AUTO_INCREMENT,
	flash_num int,
	question varchar(255) NOT NULL,
	answer varchar(255) NOT NULL,
	PRIMARY KEY (flash_id)
);

SELECT * FROM flashcards;

INSERT INTO flashcards (flash_num, question, answer, createdAt, updatedAt) VALUES (1, 'What is 2 + 2?', '4', '20170901', '20170901');
INSERT INTO flashcards (flash_num, question, answer, createdAt, updatedAt) VALUES (2, 'What is 5 - 3?', '2', '20170901', '20170901');


CREATE TABLE categories
(
	cat_id int NOT NULL AUTO_INCREMENT,
	cat_name varchar(255) NOT NULL,
	PRIMARY KEY (cat_id)
);

SELECT * FROM categories;

INSERT INTO categories (cat_name, createdAt, updatedAt) VALUES ('Math', '20170901', '20170901');





CREATE TABLE favorites
(
	fav_id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (fav_id)
);


CREATE TABLE bubbles
(
	bub_id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (bub_id)
);

