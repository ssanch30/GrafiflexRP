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
    // Acá irían los datos para la conexión
    // en un ambiente de producción
    client:   process.env.DB_CLIENT,
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
