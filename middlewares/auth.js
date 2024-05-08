import {User} from '../models/user.js'
import jwt from 'jsonwebtoken'

export const Authenticate = async (req,res,next)=>{
    const token = req.header("Auth")
    try {
        if(!token) return res.json({message:"login first"});

        const decode = jwt.verify(token,"!@#$%^&*()");

        // console.log("This is decoded data",decode)
        const id = decode.userId

        let user = await User.findById(id)

        if(!user) return res.status(404).json({message:"User Not Exist"})

        req.user = user

        next();
    } catch (error) {
        res.status(401).json({message:error})
        
    }
}