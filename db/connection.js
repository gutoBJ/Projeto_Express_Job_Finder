const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite', // or 'postgres', 'sqlite', etc.
  storage: './db/app.db', // for SQLite
});

module.exports = sequelize;