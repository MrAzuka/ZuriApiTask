const express = require('express')
const router = express.Router()
const {data} = require('../models/dataSchema.js')
const {createUser, getAll,
        getUser,updateUser, deleteUser} = require('../controllers/crudControllers.js')

router.post('/', createUser)

router.get('/', getAll)

router.get('/:id', getUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router