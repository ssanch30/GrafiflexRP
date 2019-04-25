require('dotenv').config()
module.exports = {
  development: {
    client:   'mysql',
    connection: {
      host : process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PSW,
      database: process.env.DB
    },
    useNullAsDefault: true
  },

  production: {

    client:   'mysql',
    connection: {
      host : process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PSW,
      database: process.env.DB
    },
    useNullAsDefault: true

  }

}


