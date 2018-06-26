const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getAll,
  getGroup
}

function getAll () {
  return db('worldcup')
    .select()
}

function getGroup (id) {
  // id = "B' " + "'OR 1=1"
  // console.log(id)
  return db('worldcup')
    .select()
    .where('country_group', id)
}
