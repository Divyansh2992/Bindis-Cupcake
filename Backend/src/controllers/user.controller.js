
import bcrypt from 'bcrypt'
import generateToken from "../utils/jwt.js";
import User from '../models/user.model.js';

const signup = async (req , res) => {
    const {mobile_number , password, username} = req.body
    try {
        const existUser = await User.find({mobile_number})
        if(existUser) return res.status(400).json({message : "User already exists with this number"})
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password,salt)
        const newUser = new User({mobile_number , password : hashPass ,username})
        const saveUser = await newUser.save()


        const token = await generateToken(saveUser)

        res.cookie("token",token,{
            httpOnly: true, // Prevents client-side JS access
            secure: true,   // Ensures cookie is sent only over HTTPS (enable in production)
            sameSite: "Strict", // Helps prevent CSRF attacks
          })

          return res.status(200).json({
            message:'Signup successfull',
            User:saveUser,
            token
        })
    } catch (error) {
        return res.status(400).json({
            message:'Internal Server error',
            error
        })
    }

}

const login = async (req , res) => {
    const {mobile_number , password} = req.body
    try {
        const existUser = await User.findOne({mobile_number}).select('+password')
        if(!existUser) return res.status(400).json({message : "User already exists"})
        const hashPass = existUser.password;
        const isSame = await bcrypt.compare(password, hashPass)
        if(!isSame) return res.status(400).json({message : "Password or mobile_number does not match"})
        
            const token = await generateToken(existUser)

            res.cookie("token",token,{
                httpOnly: true, // Prevents client-side JS access
                secure: true,   // Ensures cookie is sent only over HTTPS (enable in production)
                sameSite: "Strict", // Helps prevent CSRF attacks
              })
              return res.status(200).json({
                message:'Login successfull',
                User:existUser,
                token
            })

    } catch (error) {
        
        return res.status(400).json({
            message:'Internal Server error',
            error
        })      
    }
}



const getUsers = async (req , res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json(error)
    }
}

const addAddress = async (req , res) => {
    const id = req.user.id;
    const address = req.body.address;
    try {
        const addAdd = await User.findByIdAndUpdate(id , {address} , {new:true})
        return res.status(200).json(addAdd)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export {signup , login , getUsers, addAddress}