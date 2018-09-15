module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '192.168.1.1',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'Registro_Paradas'
    },
    useNullAsDefault: true
  },

  production: {
    // Acá irían los datos para la conexión
    // en un ambiente de producción
  }

}
