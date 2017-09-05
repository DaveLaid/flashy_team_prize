-- MUST GOT IN THIS ORDER!!!!   users > categories > sets > flashcards.

INSERT INTO users (displayname, username, password, createdAt, updatedAt) VALUES ('David Laidlaw', 'david', 'david', '20170901', '20170901');

INSERT INTO categories (cat_name, createdAt, updatedAt) VALUES ('Math', '20170901', '20170901');
INSERT INTO categories (cat_name, createdAt, updatedAt) VALUES ('Biology', '20170904', '20170904');
INSERT INTO categories (cat_name, createdAt, updatedAt) VALUES ('History', '20170904', '20170904');
INSERT INTO categories (cat_name, createdAt, updatedAt) VALUES ('Programming', '20170904', '20170904');
INSERT INTO categories (cat_name, createdAt, updatedAt) VALUES ('Literature', '20170904', '20170904');
INSERT INTO categories (cat_name, createdAt, updatedAt) VALUES ('Civics', '20170904', '20170904');

INSERT INTO sets (title, url, createdAt, updatedAt, CategoryId, UserId) VALUES ('Math 101', 'http://www.math.wsu.edu/HS/problems.html', '20170901', '20170901', 1, 1);
INSERT INTO sets (title, url, createdAt, updatedAt, CategoryId, UserId) VALUES ('Math 202', 'http://catalog.csuci.edu/preview_course_nopop.php?catoid=11&coid=20549', '20170904', '20170904', 1, 1);
INSERT INTO sets (title, url, createdAt, updatedAt, CategoryId, UserId) VALUES ('biology 101', 'www.google.com', '20170904', '20170904', 2, 1);

INSERT INTO flashcards (flash_num, question, answer, createdAt, updatedAt, SetId) VALUES (1, 'What is 2 + 2?', '4', '20170901', '20170901', 1);
INSERT INTO flashcards (flash_num, question, answer, createdAt, updatedAt, SetId) VALUES (2, 'What is 5 - 3?', '2', '20170901', '20170901', 1);
INSERT INTO flashcards (flash_num, question, answer, createdAt, updatedAt, SetId) VALUES (1, '5 x 3 = ?', '15', '20170904', '20170904', 2);
INSERT INTO flashcards (flash_num, question, answer, createdAt, updatedAt, SetId) VALUES (2, '12 x 5 = ?', '60', '20170904', '20170904', 2);


