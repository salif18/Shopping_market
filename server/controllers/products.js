//importation de la table products
const Products = require('../models/table_products')

exports.CreatProd = (req,res,next)=>{
    const products = new Products({
        image:req.body.image,
        nom:req.body.nom,
        description:req.body.description,
        category:req.body.category,
        prix:req.body.prix
    })
    products.save()
    .then(()=>res.status(201).json({message:'product inserer'}))
    .catch((error)=>res.status(400).json({error}))
}

exports.ReadAllProd = (req,res,next) => {
    Products.find()
    .then((products)=>res.status(200).json(products))
    .catch((error)=>res.status(400).json({error}))
}

exports.ReadOneProd = (req,res,next) => {
    Products.findOne({id:req.params.id})
    .then((product)=>res.status(200).json(product))
    .catch((error)=>res.status(400).json({error}))
}

exports.UpdateProd = (req,res,next) => {
    Products.updateOne({id:req.params.id},{...req.body, id:req.params.id})
    .then(()=>res.status(200).json({message:'product modifier'}))
    .catch((err)=>res.status(400).json({err}))
}

exports.DeleteProd = (req,res,next)=>{
    Products.deleteOne({id:req.params.id})
    .then(()=>res.status(200).json({message:'product supprimer'}))
    .catch((err)=>res.status(400).json({err}))
}