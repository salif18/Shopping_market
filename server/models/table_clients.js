//Importation du module mongoose
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const client = mongoose.Schema({
    prenom:{type:String,required:true},
    nom:{type:String,required:true},
    address:{type:String,required:true},
    numero:{type:Number,required:true,unique:true},
    password:{type:String,required:true}
})

client.plugin(uniqueValidator)
module.exports = mongoose.model('Compte',client)