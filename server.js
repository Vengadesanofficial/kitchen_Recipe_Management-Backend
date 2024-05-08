import express from 'express'
import mongoose from 'mongoose';
import bodyParse from 'express'
import userRouter from './routes/user.js'
import receipeRouter from './routes/receipe.js'
import cors from 'cors'

const app = express();

app.use(bodyParse.json())

app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

//userRouter
app.use('/api',userRouter)
//receipe Router
app.use('/api',receipeRouter)


mongoose.connect(
    'mongodb+srv://vengadesanvengadesan16107054:1Z3uwmDVSYB1qA7w@cluster0.xfyxq0e.mongodb.net/',{
        dbName : "Kitchen_Management_Receipe",
    }
).then(()=>console.log("MongoDb is Connected")).catch((err)=>console.log(err.message));

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`))







// user name :vengadesanvengadesan16107054
// Password : 1Z3uwmDVSYB1qA7w