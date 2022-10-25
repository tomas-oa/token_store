-- POSTGRESQL SCHEMA FOR THE DATABASE 

CREATE DATABASE token_store;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    coin INTEGER DEFAULT 1000
);

CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    token_id INTEGER NOT NULL,
    seller_id INTEGER NOT NULL,
    buyer_id INTEGER NOT NULL,
    price INTEGER NOT NULL,
    transaction_date TIMESTAMP NOT NULL,
    FOREIGN KEY (token_id) REFERENCES tokens(id),
    FOREIGN KEY (seller_id) REFERENCES users(id),
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);

CREATE TABLE tokens (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    state BOOLEAN NOT NULL,
    owner_id INTEGER NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES users(id)
);

CREATE TABLE history(
    id SERIAL PRIMARY KEY,
    token_id INTEGER NOT NULL,
    transaction_date TIMESTAMP NOT NULL,
    FOREIGN KEY (token_id) REFERENCES tokens(id)
);

CREATE TABLE favorites(
    id SERIAL PRIMARY KEY,
    token_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (token_id) REFERENCES tokens(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
