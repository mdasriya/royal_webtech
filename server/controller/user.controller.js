const { UserModel } = require("../model/user.model")
const brypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const handleUserRegister = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const reqdata = await UserModel.find({ email })
        if (reqdata.length > 0) {
            res.status(200).json({ msg: "you are Alerady Register" })
        } else {
            brypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    res.status(400).json({ msg: err.message })
                } else {
                    const userData = new UserModel({ name, email, password: hash })
                    await userData.save()
                    res.status(200).json({ msg: "User Register success!!!" })
                }
            })
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const findData =  await UserModel.findOne({ email })
        if (findData) {
            brypt.compare(password, findData.password, (err, result) => {
                if (result) {
                      const token = jwt.sign({UserId:findData._id, user:findData.name}, "masai")
                 res.status(200).json({mag:"User Login Success!!!", token:token})
                }else{
                    res.status(200).json({msg:"wrong Credential"})
                }
            })
        } else {
            res.status(200).json({ msg: "register first" })
        }

    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    handleUserRegister, handleUserLogin
}