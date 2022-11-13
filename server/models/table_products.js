//Importation du module mongoose
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    image:{type:String,required:true},
    nom:{type:String,required:true},
    description:{type:String},
    category:{type:String,required:true},
    prix:{type:Number,required:true}
})

module.exports= mongoose.model('Products',productSchema)