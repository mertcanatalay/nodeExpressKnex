const config = {
  client: "mssql",
  connection: {
    host: "localhost",
    user: "sa",
    password: "123",
    database: "MyProject",
    options: {
      // trustedconnection:true,
      // enableArithAort:true,
      // instancename:'SQLEXPRESS',
      trustServerCertificate: true
    }
  }
}

export default config;