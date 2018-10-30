


GrafiflexRP
==============

##Description

Aplication creaded with react, express, ,knex, Graphql, for recordint stop times and waiting times in the production graphic process eof the company [Grafiflex SAS](www.grafiflex.com)


## Setting Up

For installing:

`npm install`

`cd server`

`npm install`

Should have a MySQL connection

Install knex as global
`npm install knex -g`

For making changes in the data base structure:

`knex migrate:make <change_name>`
`knex migrate:latest`

To populate the data base

`knex seed:make merchants_products --env development`
`knex seed:run`

Create a .env file with the next variables in the server folder:

```
DB_CLIENT = 
DB_HOST = 
DB_PORT = 
DB_USER = 
DB_PSW = 
DB = 
```

For testing and development:
`npm start`
Start server:

`cd server`
`npm start`

For production
`npm run build`