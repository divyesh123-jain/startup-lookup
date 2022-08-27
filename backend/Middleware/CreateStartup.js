const jwt= require('jsonwebtoken')
require('dotenv').config();

const CreateStartup = async(req,res,next)=>{
    const token = req.headers.token;
    if(!token) return res.status(500).json({msg:"Invalid Credentials"})
    try{
        const data =jwt.verify(token,process.env.JWT_SECRET)
        req.body.uid = data.user.id
        next();
    }
    catch(err){
        res.status(403).json({msg:"Access Denied"})
    }
}

module.exports = CreateStartup;