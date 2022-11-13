//Importation du module express
const express = require('express')
const router = express.Router()
const productsCtrl = require('../controllers/products')

router.post('/',productsCtrl.CreatProd)
router.get('/',productsCtrl.ReadAllProd)
router.get('/:id',productsCtrl.ReadOneProd)
router.put('/:id',productsCtrl.UpdateProd)
router.delete('/:id',productsCtrl.DeleteProd)

module.exports  = router;