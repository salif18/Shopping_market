//Importation de la table panier
const Panier = require('../models/table_panier')

exports.CreatPanier = (req,res,next)=>{
    const panier = new Panier({
        image:req.body.image,
        nom:req.body.nom,
        description:req.body.description,
        category:req.body.category,
        prix:req.body.prix,
        qty:req.body.qty
    })
    panier.save()
    .then(()=>res.status(201).json({message:'panier creer'}))
    .catch((err)=>res.status(400).json({err}))
}

exports.ReadPanier = (req,res,next)=>{
    Panier.find()
    .then((paniers)=>res.status(200).json(paniers))
    .catch((err)=>res.status(400).json({err}))
}

exports.DeletePanier = (req,res,next)=>{
    Panier.deleteOne({id:req.params.id})
    .then(()=>res.stauts(200).json({message:'Objet delete'}))
    .catch((err)=>res.status(400).json({err}))
}