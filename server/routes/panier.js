//Importation du module express
const express = require('express')
const router = express.Router()
const panierCtrl = require('../controllers/panier')

router.post('/',panierCtrl.CreatPanier)
router.get('/',panierCtrl.ReadPanier)
router.delete('/:id',panierCtrl.DeletePanier)

module.exports = router