# Token store API 1.0.0
An OpenSea-like backend project built with Postgres, Express and Node

## Introduction
This project aims to provide users with a simple and intuitive platform for collecting, selling and buying virtual tokens with other users


## Get started
Clone the repo: 
```
git clone https://github.com/tomas-oa/token_store
```

Install all dependencies:
```
npm i
```
(you have to be in the root folder of the project)

## Run locally
You can run the API in development mode with:
```
npm run dev
```

Or run it with node:
```
npm start
```

## Swagger UI Documentation
In order to access SwaggerUI use:
```
localhost:PORT/api-docs
```
**Default port is 5000**

# FN3 Database Schema
![store-er](https://user-images.githubusercontent.com/78031280/211879470-74794ccb-70f4-4772-9bd7-b35a8e2a991c.png)

## Some of the tech used
- [Node](https://nodejs.org/en/) as runtime enviroment for JavaScript
- [Express](https://expressjs.com/) as the backend framework
- [Postgres](https://www.postgresql.org/) as the database
- [node-postgres](https://node-postgres.com/) to create connection with the database and make querys
- [Swagger UI](https://swagger.io/) for documentation of the API

## Enviroment variables
To run this project, you'll need to add the following enviroment variables to your .env file in the root folder.

### .env
`DB_USER`

`DB_PASSWORD`

`DB_HOST`

`DB_PORT`

`DB_DATABASE`
