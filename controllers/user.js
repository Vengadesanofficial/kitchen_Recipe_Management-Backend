import {User} from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async(req, res)=>{
const {name, gmail, password} = req.body 

try {
    let user =await User.findOne({gmail})

    if(user) return res.json ({message : "user Already exist"})
//hashpassword
    const hashPass = await bcrypt.hash(password,10)

    user = await User.create({name,gmail,password:hashPass})

    res.json({message:"user register sucessfully",user})

} catch (error) {

    res.json({message:error})
}
}

export const login = async (req,res)=>{
    const {gmail,password} = req.body
    try {
        let user = await User.findOne({gmail});
        // console.log("user is comeing from login",user)

        if(!user) {
            return res.status(404).json({message:"user not exist..."})
        }

        const validPass = await bcrypt.compare(password,user.password);

        if(!validPass) {
            return res.status(401).json({message:"Invalid Credential"});
        }
      
        const token = jwt.sign({userId:user._id},"!@#$%^&*()",{
            expiresIn:"1d"
        })

        res.json({message:`welcome ${user.name}`,token})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const profile = async (req,res)=>{
    res.json({user:req.user})
}