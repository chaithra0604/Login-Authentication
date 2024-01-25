const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const Admin = require('../model/user');
const router = express.Router();

//userRegistration

router.post('/register',async(req,res) => {
    try {
        const { username,password } = req.body;
        const hashedPassword = await bcrypt.hash( password , 10 );
        const user = new User({ username : username , password : hashedPassword });
        await user.save();
        res.status(201).json({ message : "User Registration Successfull" });
    } catch (error) {
        //console.log(error);
        res.status(500).json({ error : "Registration Failed" });
    }
})

//userLogin

router.post('/login',async(req,res) => {
    try {
        const { username,password } = req.body;
        const user = await User.findOne({ username });
        if(!user){
            return res.status(401).json({ error : "Authentication failed" })
        }
        const passwordMatch = await bcrypt.compare(password,user.password);
        if(!passwordMatch){
            return res.status(401).json({ error : "Authentication failed" })
        }
        const token = jwt.sign({userId : user._id},"secret key",{expiresIn:'1h'});
        res.status(200).json({ token })
    } catch (error) {
        //console.log(error);
        res.status(500).json({error : "Login Failed"});
    }
})

router.post('/forgotPassword',async(req,res) => {
    try { 
        const { username,password } = req.body;
    const user = await User.findOne({ username });
    console.log(user);
    if(user){
        const updatedPassword = await User.findByIdAndUpdate(user._id,{password},{new:true});
        return res.status(200).json(updatedPassword);
    }

    } catch (error) {
        //console.log(error);
        res.status(500).json({error : "Updation Failed"});
    }
})


module.exports = router;


//adminRegister

router.post('/adminRegister',async(req,res) => {
    try {
        const { username,password } = req.body;
        const hashedPassword = await bcrypt.hash( password , 10 );
        const admin = new Admin({ username : username , password : hashedPassword });
        await admin.save();
        res.status(201).json({ message : "Admin Registration Successfull" });
    } catch (error) {
        //console.log(error);
        res.status(500).json({ error : "Registration Failed" });
    }
})