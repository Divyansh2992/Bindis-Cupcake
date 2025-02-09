import jwt from 'jsonwebtoken'

const generateToken = async (user) =>{
    const tokenUser = {
        id:user._id,
        username:user.username,
        mobile_number:user.mobile_number,
    }
    const token = await jwt.sign(tokenUser , process.env.SECRET_KEY , {expiresIn:'1h'})

    return token;
}

export default generateToken