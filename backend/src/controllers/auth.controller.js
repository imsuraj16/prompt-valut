const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {

    try {
        const { username, password } = req.body

        const userExists = await userModel.findOne({
            username
        })

        if (userExists) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const newUser = await userModel.create({
            username, password: await bcrypt.hash(password, 10)
        })

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
        res.cookie("token", token)


        res.status(201).json({
            msg: "user created",
            newUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }


}



const loginUser = async(req,res)=>{

    const{username,password} = req.body

    const userExists = await userModel.findOne({
        username
    })

    if(!userExists){
        return res.status(400).json({
            msg : "username not exists"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password,userExists.password)

    if(!isPasswordCorrect){
        return res.status(400).json({
            msg : "inavalid password"
        })
    }

    const token = jwt.sign({id : userExists._id},process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(200).json({
        msg : "user logged in successfully"
    })
}









module.exports = {

    registerUser,
    loginUser
}