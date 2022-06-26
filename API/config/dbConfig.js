module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Nextgen123",
  DB: "NERP",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
