const jwt = require('jsonwebtoken');
const User = require('../models/users.model');


const checkToken = async (req, res, next) =>{
    //Esta el token en la cabecera?
    if(!req.headers['authorization']){
        res.status(401).json({message:'Necesitas el token de autenticación'})
    }
    const token = req.headers['authorization']
    //Verificamos el token
    let data;
    try{
        data = jwt.verify(token, process.env.SECRET_KEY)

    } catch(error){
        res.status(401).json({message:'El token no es correcto'})
    }

    //Recuperamos el token
    
   const user = await User.findById(data.user_id)
   if(!user){
    res.status(401).json({message:'El usuario no existe'})
   }

   req.user = user;
    
   

    next()
}

module.exports = {
    checkToken

}