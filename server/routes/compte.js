//Importation du module express
const express = require('express')
const router = express.Router()
const compteCtrl = require('../controllers/compte')

router.post('/signup',compteCtrl.signup)
router.post('/login',compteCtrl.login)

module.exports = router