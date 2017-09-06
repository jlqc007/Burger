CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int(10) AUTO_INCREMENT NOT NULL,
    burger VARCHAR(10) NOT NULL, 
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);
