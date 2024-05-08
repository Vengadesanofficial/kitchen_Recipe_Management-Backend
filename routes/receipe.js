import express from 'express'
import { add, getAllReceipe, getReceipeById, getReceipeByUserId, getSavedReceipe, savedReceipeById } from '../controllers/receipe.js';
import { Authenticate } from '../middlewares/auth.js';
const router = express.Router();

//create Receipe

router.post('/add',Authenticate, add)

//get All Receipe
router.get('/',getAllReceipe)


///getAll Saved Receipe
router.get('/saved',getSavedReceipe)

//get Receipe by ID
router.get('/:id',getReceipeById)

//getReceipe by UserId
router.get('/user/:id',getReceipeByUserId)

//savedReceipe by Id
router.post('/:id',Authenticate,savedReceipeById)


export default router;