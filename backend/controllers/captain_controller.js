const CaptainModel = require('../models/captain.modle');
const captainService = require('../service/captain.service');
const { validationResult } = require('express-validator');
const BlackListTokensModel = require("../models/blackListToken.Model");     

module.exports.registerCaptain = async (req, res , next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    const {fullname, email, password, vehicle} = req.body;

    const isCaptainAlreadyExists = await CaptainModel.findOne({ email });
    if (isCaptainAlreadyExists) {
        return res.status(400).json({ msg: 'Captain already exists' });
    }
    

    const hashPassword = await CaptainModel.hashPassword(password);
    
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicelType: vehicle.vehicelType 
    })
    const token = captain.generateAuthToken();
    res.status(201).json({ token , captain });
}
module.exports.loginCaptain = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
    const { email, password } = req.body;
    const captain = await CaptainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(401).json({ message: "Invalid Email or Password" });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid Email or Password" });
    }
    const token = captain.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ token, captain })
}

module.exports.getCaptainProfile = (req,res, next) => {
    res.status(200).json({captain:req.captain})
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    res.clearCookie('token');
    if (token) {
        await BlackListTokensModel.create({ token });
    }
    res.status(200).json({ message: "Captain logged out successfully" });
}