import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './utils/db.js'
import userRoute from './routes/user.routes.js'
import productRoute from './routes/product.routes.js'



dotenv.config()

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())


app.use('/api/user' , userRoute)
// app.use('/api/category' , categoryRoute)
app.use('/api/product' , productRoute)
// app.use('/api/order' , orderRoute)

const port = 8080 || process.env.PORT

app.listen(port , () => {
    console.log('server started on port : ' , port);
    // connectDB()
})