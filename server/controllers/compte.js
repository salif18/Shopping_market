//Importation du module
const bcrypt = require('bcrypt')
const Compte = require('../models/table_clients')

exports.signup = (req,res,next)=>{
    bcrypt.hash((req.body.password , 10))
    .then(hash =>{
        const compte = new Compte({
        prenom:req.body.prenom,
        nom:req.body.prenom,
        address:req.body.addres,
        numero:req.body.numero,
        password:hash
        })
        compte.save()
        .then(()=>res.status(201).json({message:'client creer'}))
        .catch((err)=>res.status(400).json({err}))
    }).catch((err)=>res.status(500).json({err}))
}

exports.login = (req,res,next)=>{
    Compte.findOne({numero:req.body.numero})
    .then((num)=>{
        if(!num){
            return res.status(400).json({messag:'numero incorrect'})
        }
        bcrypt.compare(req.body.password,userId.password)
        .then(valid => {
            if(!valid){
                return res.status(400).json({message:'mot de passe incorrect'})
            }
            res.status(200).json({ userId: user._id,token: jwt.sign({ userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                )
            });
            
        })
    })
}