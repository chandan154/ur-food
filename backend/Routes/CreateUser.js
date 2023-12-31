const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const {body, validationResult} = require('express-validator');
// post request to create a user
router.post('/creatuser', [body('name').isLength({min : 5}), body('email', 'Incorrect email').isEmail(), body('password', 'Incorrect password').isLength({min : 5})], async(req, res) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    try{
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        })
    res.json({success: true});
    }
    catch(error){
        console.log(error);
        res.json({success: false});
    }
})
router.post('/loginuser', async(req, res) => {
    
    let email = req.body.email;
    try{
        let userdata = await User.findOne({email});
        if(!userdata)
        {
            return res.status(400).json({errors:"try login it with correct credentials"})
        }
        if(!req.body.password === userdata.password)
        {
            return res.status(400).json({errors:"try login it with correct credentials"})
        }
        return res.json({success: true});
    }
    catch(error){
        console.log(error);
        res.json({success: false});
    }
})
module.exports = router;