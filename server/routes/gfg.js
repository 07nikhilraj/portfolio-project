const express = require('express')

// controller function
const {getInfoGFG} = require('../controllers/gfgController.js')

// router
const router = express.Router()

router.get('/',getInfoGFG)

module.exports = router

 