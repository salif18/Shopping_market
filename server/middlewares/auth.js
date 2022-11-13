//Importation du module jsonwebtoken
const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    try{
        //recuperer le token de headers
        const token = req.headers.authorization.split(' ')[1]
        
        //decoder le token recus
        const decodedToken = jwt.verify(token,'RANDON_TOKEN_SECRET')

        //recuperer le userId decoder
        const userId = decodedToken.userId
        req.auth = {userId:userId}
        next()
    }catch(e){
        res.status(401).json({message:'authentification incorrect', error:error })
    }
}