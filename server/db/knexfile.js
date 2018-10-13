module.exports = {

  development: {
    client: 'mysql',
    connection: {
<<<<<<< HEAD
      host : 'localhost',
      port: '3306',
      user: 'root',
      password: 'santisanch3',
=======
      host : '192.168.1.1',
      port: '3306',
      user: 'root',
      password: '123456',
>>>>>>> 7ab3ef53fb9302bf87c4791f45af6dcaa9383c57
      database: 'Registro_Paradas'
    },
    useNullAsDefault: true
  },

  production: {
    // Acá irían los datos para la conexión
    // en un ambiente de producción
  }

}
