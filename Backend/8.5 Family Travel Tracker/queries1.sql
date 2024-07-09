-- DELETE EXISTING TABLE --
DROP TABLE IF EXISTS visited_countries, users;

--CREATE TABLE ONE TO MANY RELATIONSHIPS --
CREATE TABLE users (    
    id SERIAL PRIMARY KEY,
    name VARCHAR(15) UNIQUE NOT NULL,
    color VARCHAR(15)
);

CREATE TABLE visited_countries (
    id SERIAL PRIMARY KEY,
    country_code CHAR(2) NOT NULL,
    user_id INTEGER REFERENCES users(id)
);

-- INSERT DATA --
INSERT INTO users (name, color) 
VALUES ('Stephan L', 'brown'),('Sidra A', 'green'), ('Aliyah L', 'blue');

INSERT INTO visited_countries (country_code, user_id)
VALUES ('FR', 1), ('FR', 2), ('US', 1), ('US',2), ('US',3), ('CA',2);

-- JOIN TABLE --
SELECT * 
FROM visited_countries
JOIN users
ON user_id = users.id;


