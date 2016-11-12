const Sequelize = require('sequelize');

const DATABASE = 'haystack'
    , HOST     = 'haystack-db.cx8odnpzpwra.ap-southeast-2.rds.amazonaws.com'
    , USERNAME = 'jarimado'
    , PASSWORD = '7f4df451';

const pgClient = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST
  , dialect: 'postgres'
})

const Pizza = pgClient.define('pizza', {
    id:   { type: Sequelize.STRING, primaryKey: true }
  , name: { type: Sequelize.STRING }
  , toppings: { type: Sequelize.STRING }
  , img: { type: Sequelize.STRING }
  , username: { type: Sequelize.STRING }
  , created: { type: Sequelize.BIGINT }
})

Pizza.sync().then(() => {
  console.log('PG ready')
})

module.exports = Pizza;
