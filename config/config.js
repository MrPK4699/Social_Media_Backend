const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  SECRET_KEY: process.env.SECRET_KEY,
  MONGODB_URL: process.env.MONGODB_URL,
  PORT: process.env.PORT || 4001
};