const express = require('express')
const user = require('../controllers/user')
const router = express.Router()

const usercontoller = require('../controllers/user')


router.get('/users', usercontoller.index)

router.get('/user/:id', usercontoller.show)
    
  router.post('/user', usercontoller.store)

  router.put('/user/:id', usercontoller.update)

  router.delete('/user/:id', usercontoller.delete)

  module.exports = router