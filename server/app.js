//Importation du module 😑 
const express = require('express')
const app = express()
const cors = require('cors')
const con = require('./connection/connection')
const productsRter = require('./routes/products')
const panierRter = require('./routes/panier')
const compteRter = require('./routes/compte')

//Config 
app.use(express.json())
app.use(cors())

//Fonction de app
app.use('/products',productsRter)
app.use('/panier',panierRter)
app.use('/auth',compteRter)
module.exports = app