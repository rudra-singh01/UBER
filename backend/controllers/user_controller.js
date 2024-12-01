const UserModel = require("../models/User_model");
const userService = require("../service/user.service")
const {validationResult} = require("express-validator")
const BlackListTokensModel = require("../models/blackListToken.Model");                             

module.exports.registerUser = async (req, res,next) => {
    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "user already exists" });
    }

    const hashPassword  = await UserModel.hashPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hashPassword
    })
    const token = user.generateAuthToken();

    res.status(200).json({token,user})
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ message: "Invalid Email or Password" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid Email or Password" });
    }
    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ token, user })
}

module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user)
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (token) {
        await BlackListTokensModel.create({ token });
    }
    res.status(200).json({ message: "Logged out successfully" });
}