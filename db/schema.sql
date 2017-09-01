### Flashcards Schema

CREATE DATABASE flashcards_db;

USE flashcards_db;


CREATE TABLE users
(
	user_id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE sets
(
	set_id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	url varchar(255) NOT NULL,
	PRIMARY KEY (set_id)
);

CREATE TABLE flashcards
(
	flash_id int NOT NULL AUTO_INCREMENT,
	flash_num int,
	question varchar(255) NOT NULL,
	answer varchar(255) NOT NULL,
	PRIMARY KEY (flash_id)
);


CREATE TABLE category
(
	cat_id int NOT NULL AUTO_INCREMENT,
	cat_name varchar(255) NOT NULL,
	PRIMARY KEY (cat_id)
);


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

