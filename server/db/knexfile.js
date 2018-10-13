module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      port: '3306',
      user: 'root',
      password: 'santisanch3',
      database: 'Registro_Paradas'
    },
    useNullAsDefault: true
  },

  production: {
    // Acá irían los datos para la conexión
    // en un ambiente de producción
  }

}
