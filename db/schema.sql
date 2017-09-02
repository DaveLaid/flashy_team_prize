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


CREATE TABLE sets
(
	set_id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	url varchar(255) NOT NULL,
	PRIMARY KEY (set_id)
);

SELECT * FROM sets;


CREATE TABLE flashcards
(
	flash_id int NOT NULL AUTO_INCREMENT,
	flash_num int,
	question varchar(255) NOT NULL,
	answer varchar(255) NOT NULL,
	PRIMARY KEY (flash_id)
);

SELECT * FROM flashcards;


CREATE TABLE categories
(
	cat_id int NOT NULL AUTO_INCREMENT,
	cat_name varchar(255) NOT NULL,
	PRIMARY KEY (cat_id)
);

SELECT * FROM categories;







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

