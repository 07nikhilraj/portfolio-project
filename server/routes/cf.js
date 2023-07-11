const express = require('express')

// controller function
const {getInfoCF} = require('../controllers/cfController.js')

// router
const router = express.Router()

router.get('/',getInfoCF)

module.exports = router

 