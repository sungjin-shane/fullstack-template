const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getAll()
    .then(worldcup => {
      res.json(worldcup)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.get('/:id', (req, res) => {

})

router.put('/', (req, res) => {

})

router.post('/', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router
