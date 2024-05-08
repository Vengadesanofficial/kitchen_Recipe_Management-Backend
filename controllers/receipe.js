import {Receipe} from '../models/Receipe.js'
import { savedReceipe } from '../models/SavedReceipe.js'

export const add = async(req,res)=>{
    const{
        title,ist,ing1,ing2,ing3,ing4,
        qty1,qty2,qty3,qty4,imgUrl}= req.body;

        try {
            const receipe = await Receipe.create({
                title,
                ist,
                ing1, 
                ing2,
                ing3,
                ing4,
                qty1,
                qty2,
                qty3,
                qty4,
                imgUrl,
                user:req.user,
            })
            res.json({message:"Receipe Created Sucessfully",receipe})
        } catch (error) {
            res.json({message:error})
            
        }
}


export const getAllReceipe = async (req,res)=>{
    const receipe = await Receipe.find();
    res.json({receipe})
}

export const getReceipeById = async(req,res)=>{
    const id = req.params.id
    try {
        let receipe = await Receipe.findById(id)
        if(!receipe)res.json({message:'Receipe not Exist'})
       else res.json({message:"receipe by id",receipe})
        
    } catch (error) {
        res.json({message:error})
    }
}
export const getReceipeByUserId = async (req,res)=>{
     const userId = req.params.id;
    try {
        let receipe = await Receipe.find({user:userId})
        if(!receipe)res.json({message:'Receipe not Exist'})
        res.json({message:"receipe by userid",receipe});
        
    } catch (error) {
        res.json({message:error});
    }
}
export const savedReceipeById = async(req,res)=>{
    const id = req.params.id
    let receipe = await savedReceipe.findOne({receipe:id})
    if(receipe) return res.json({message:"Receipe Already Saved"})
    receipe = await savedReceipe.create({receipe:id})
    res.json({message:"Receipe Saved Sucessfully...."})

}

export const getSavedReceipe = async (req,res)=>{
    const receipe = await savedReceipe.find()
    res.json({receipe})
}