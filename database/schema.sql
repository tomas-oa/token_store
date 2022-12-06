-- POSTGRESQL SCHEMA FOR THE DATABASE
CREATE DATABASE token_store;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE coins (
    user_id INTEGER NOT NULL,
    amount INTEGER DEFAULT 1000,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE tokens (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    owner_id INTEGER NOT NULL,
    url VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    onsale BOOLEAN NOT NULL,
    created_by INTEGER NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    token_id INTEGER NOT NULL,
    seller_id INTEGER NOT NULL,
    buyer_id INTEGER NOT NULL,
    transaction_date VARCHAR(255) NOT NULL DEFAULT CURRENT_DATE,
    price INTEGER NOT NULL,
    FOREIGN KEY (token_id) REFERENCES tokens(id) ON DELETE CASCADE,
    FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (buyer_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    token_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (token_id) REFERENCES tokens(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
