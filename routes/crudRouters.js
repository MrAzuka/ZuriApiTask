const express = require('express')
const router = express.Router()
const {data} = require('../models/dataSchema.js')
const {createUser, getAll,
        getUser,updateUser, deleteUser} = require('../controllers/crudControllers.js')

router.post('/info', createUser)

router.get('/info', getAll)

router.get('/info/:id', getUser)

router.put('/info/:id', updateUser)

router.delete('/info/:id', deleteUser)

module.exports = router