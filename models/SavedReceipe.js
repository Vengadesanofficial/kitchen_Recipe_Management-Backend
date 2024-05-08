import mongoose,{modelNames} from 'mongoose';


const savedReceipeSchema = new mongoose.Schema({
    receipe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"receipe",
    }
})
export const savedReceipe = mongoose.model("savedReceipe",savedReceipeSchema)