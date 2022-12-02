const { config } = require('dotenv');

config();

module.exports = {
  db: {
    user: process.env.DB_USER || 'alumno',
    password: process.env.DB_PASSWORD || 'alumno',
    host: process.env.DB_HOST || '157.245.180.1',
    port: process.env.DB_PORT || 5423,
    database: process.env.DB_DATABASE || 'token_store',
  },
};
