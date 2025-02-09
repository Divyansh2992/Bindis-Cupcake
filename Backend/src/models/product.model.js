import mongoose from "mongoose";        

const productSchema = new mongoose.Schema(
    {
        productName:{
            type:String,
            required:[true , 'Enter product name']
        },
        Img:{
            type:String,
            require:[true , 'Enter product image']
        },
        description:{
            type:String
        },
        category:{
            type:String,
            ref:'category'
        },
        price:{
            type:Number,
            required:[true , 'Enter price']
        },
        rating:{
            type:Number,
            default:0
        },
        details:{
            weight:{
                type:Number
            },
            dimentions:{
                l:Number,
                b:Number,
                h:Number
            },
            ingredients:{
                type:String
            },
            allergens:{
                type:String
            }
        },
        reviews:[{
            userId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
            review:{
                type:String,
            },
            rate:{
                type:Number,
                enum:[1,2,3,4,5],
                default:0
            },
            likes:{
                type: Number,
                default: 0
            },
            dislikes:{
                type: Number,
                default: 0
            },
            postedAt: { 
                type: Date, 
                default: Date.now 
            }
        }]
    },
    {
        timestamps:true
    }
)

const Product = mongoose.model('Product' , productSchema)

export default Product