//Imporation du module multer 
const multer = require('multer');

//config de extension es images
const MIME_TYPES = {
     'image/jpg':'jpg',
     'image/jpeg':'jpg',
     'image/png':'png'
}

//configuration de l'environement de stockage
const storage = multer.diskStorage({
    //destination
    destination:(req,file,callback)=>{
        callback(null,'images')
    },
    //renommer les images recus
    filename:(req,file,callback)=>{
        const name = file.originalname.split('').join('-')
        const extension = MIME_TYPES[file.mimetype]
        callback(null, name + Date.now()+'.'+extension)
    }

})
module.exports = multer({storage}).single('image')