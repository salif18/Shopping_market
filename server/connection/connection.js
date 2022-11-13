//Importation du module mongoose
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const con = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('Connecte a MongoDb'))
.catch(()=>console.log('Echec de connection a MongoDb'))

module.exports = mongoose;