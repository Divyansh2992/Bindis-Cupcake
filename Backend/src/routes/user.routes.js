import express from 'express'

import  { adminAuth, checkAuth } from '../middlewares/auth.js'
import { addAddress, getUsers, login, signup } from '../controllers/user.controller.js'

const userRoute = express.Router()


userRoute.post('/signup' , signup)
userRoute.post('/login' , login)

userRoute.get('/auth', checkAuth , (req,res) => {
    const user = req.user;
    if(!user) {
        return res.status(500).json({message:"Unauthorized"})
    }
    else{
        return res.status(200).json({message:"Authorized" , user})
    }
})

userRoute.get('/get' , checkAuth, adminAuth , getUsers)

userRoute.put('/address' , checkAuth, addAddress)


export default userRoute