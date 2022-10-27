const dotenv = require("dotenv");



module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
}


/*

const path = require("path");


if (!proccess.env.HOST) {
dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});
}



module.exports = {
  host: proccess.env.DATABASE_HOST,
  username: proccess.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: proccess.env.DATABASE_PORT,
  database: prcoess.env.DATABASE_NAME,
  dialect: 'postgres',
}

*/