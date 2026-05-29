const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const express = require("express");
const router = express.Router()

dotenv.config()

const SECRET_KEY = process.env.SECRET

arr = []

router.post('/signup', (req,res)=> {
    console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    
    const password = req.body.password;
    const encrypted = jwt.sign(password, SECRET_KEY);
    arr.push({email, name, encrypted})
    res.json("data received")
})

router.post('/signin', (req, res)=> {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    const Inputpassword = jwt.sign(password, SECRET_KEY)
    for (i=0; i< arr.length; i++){
        if (arr[i].email.includes(email)){
            if (arr[i].encrypted == Inputpassword){
                res.send("done")
            }
        }
    }
})

module.exports = router