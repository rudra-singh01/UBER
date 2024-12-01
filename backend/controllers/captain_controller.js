const CaptainModel = require('../models/captain.modle');
const captainService = require('../service/captain.service');
const { validationResult } = require('express-validator');

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
