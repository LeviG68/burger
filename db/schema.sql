DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (ID)
);

INSERT INTO burger( burger_name, devoured)

VALUES ('Cheese Burger', true);

VALUES ('Mushroom Swiss Burger', true);

VALUES ('Buffalo Burger', true);
