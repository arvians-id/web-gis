require('dotenv').config();
const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_NAME, DB_DIALECT } = process.env

const coonection = {
  "username": DB_USERNAME,
  "password": DB_PASSWORD,
  "database": DB_NAME,
  "host": DB_HOSTNAME,
  "dialect": DB_DIALECT,
  "dialectOptions": {
    typeCast: function (field, next) {
      if (field.type === 'DATETIME') {
        return field.string()
      }
      return next()
    },
  }
}
module.exports = {
  "development": coonection,
  "test": coonection,
  "production": coonection
}
