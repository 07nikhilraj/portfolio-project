const express = require('express')

// controller function
const {getInfoLC} = require('../controllers/LCController.js')

// router
const router = express.Router()

router.get('/',getInfoLC)

module.exports = router

 