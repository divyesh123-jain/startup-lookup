const UserLogin = require('../Schema/UserSchema.js');
const Login = require('../Schema/LoginSchema');
const InvesterLogin = require('../Schema/InvesterLogin.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const { validationResult } = require('express-validator');
const UserSchema = require('../Schema/UserSchema.js');

const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        const existingUser = await Login.findOne({ email })
        if (existingUser) return res.status(401).json({ color: 'red', msg: "User already exists", success: false });
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        if (req.body.type === "User") {
            const { firstname, lastname, bio,type, email, age, gender } = req.body
            await UserLogin.create({
                firstname,
                lastname,
                bio,
                type,
                password: hashedPass,
                email,
                age,
                gender
            })
        }
        else {
            const { firstname,bio, lastname, age, email, gender, interests, typeOfInvester, noOfStartupsInvestedIn, yearsExp } = req.body
            await InvesterLogin.create({ firstname, bio,lastname, password, age, email, gender, interests, typeOfInvester, noOfStartupsInvestedIn, yearsExp, password: hashedPass })
        
        }

        res.status(200).json({ color: "green", msg: "User Created Successfully", success: true });
    }
    catch (err) {
        res.status(500).json({ msg: err, success: false })
    }
}

const loginUser = async (req, res) => {
    try {
        if (req.body.password) {
            let searchUser = await UserSchema.findOne({ email: req.body.email })
            if (!searchUser) {
                searchUser = await InvesterLogin.findOne({ email: req.body.email })
                if (!searchUser) {
                    return res.status(403).json({ success: false, msg: "User does not exist" })
                }
            }
            const hash = searchUser.password
            const match = await bcrypt.compare(req.body.password, hash)
            if (!match) return res.status(401).json({ msg: "Wrong Password", success: false })
            const data = {
                user: {
                    type:searchUser.type,
                    id: searchUser._id,
                }
            }
            const authToken = jwt.sign(data, process.env.JWT_SECRET);
            res.status(200).json({ authToken, success: true });
            return;
        }
        res.status(500).json({ color: "red", msg: "Enter Password", success: false });

    }
    catch (err) {
        res.status(500).json({ color: "red", err: "Some Error occuerd" })
    }
}

const getUser = async (req, res) => {
    try {
        const { uid,type } = req.body
        if(type==='User'){
            const payload =await UserSchema.findOne({ _id: uid }).select('-password');
            res.status(200).json({ payload })
            return;
        }
        const payload = await InvesterLogin.findOne({ _id: uid }).select('-password');
        res.status(200).json({payload})
        
    }
    catch (err) {
        res.status(404).json({ msg: "user not found" })
    }

}

const getUserById = async(req,res)=>{
    try{
        const {uid} = req.params;
        const data =await InvesterLogin.findOne({_id:uid});
        if(!data){
            const data = await UserSchema.findOne({_id:uid});
            return res.status(200).json({data})
        }
        return res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err});
    }
}

const getAllInvesters = async(req,res)=>{
    try{
        const data = await InvesterLogin.find({}).select('-password')
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
}

const getAllUsers = async(req,res)=>{
    try{
        const data = await UserSchema.find({}).select('-password')  
        res.status(200).json({data})
    }
    catch(err){
        res.status(500).json({err})
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const { username } = req.body;
        const user = await Login.findOne({ username });
        if (user) {
            if (user._id.toString() !== id) {
                return res.status(500).json({ success: false, msg: "username already exists" })
            }
            else {
                await Login.findOneAndUpdate({ _id: id }, req.body, { new: false });
                return res.status(200).json({ success: true, msg: "Updated Successfully" });
            }
        }
        if (!user) {
            await Login.findOneAndUpdate({ _id: id }, req.body, { new: false });
            return res.status(200).json({ success: true, msg: "Updated Successfully" });
        }
        res.status(403).json({ success: false, msg: "unauthorized" })

    }
    catch (err) {
        res.status(500).json({ success: false, msg: err })
    }
}



module.exports = { loginUser, createUser, getUser, updateUser ,getUserById,getAllUsers,getAllInvesters}