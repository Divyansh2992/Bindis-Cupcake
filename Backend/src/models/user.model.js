import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        mobile_number:{
            type:String,
            required : [true ,'Enter your email']
        },
        username:{
            type:String,
            required :[true, 'Enter your username']
        },
        password:{
            type:String,
            required:[true,'Enter password'],
            select:false
        },
        DOB:{
            type:Date
        },
        address:{
            type:String,
            default:""
        },
        role:{
            type:String,
            enum:['Admin' , 'User'],
            default : 'User'
        }
    },
    {
        timestamps:true,
    }
)

const User = mongoose.model('User' , userSchema)

export default User