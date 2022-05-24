const jwt=require('jsonwebtoken')
const User=require('../model/userModel')

const protect=async(req,res,next)=>{
    let token
    const authHeaders=req.headers.authorization
    if(authHeaders && authHeaders.startsWith('Bearer')){
        try{
            // Get token from header
            token=authHeaders.split(' ')[1]

            // Verify token
            const decoded=jwt.verify(token,process.env.JWT_SECRET)

            // Get user from token
            req.user=await User.findById(decoded.id).select('-password')

            next()
        }catch(err){
            console.log(err)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
}

module.exports={protect}