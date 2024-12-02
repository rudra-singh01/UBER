const UserModel = require("../models/User_model");
const CaptainModel = require("../models/captain.modle");
const BlackListedTokenModel = require("../models/blackListToken.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const isBlacklisted = await BlackListedTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded._id);
    req.user = user;

    return next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized" });
  }
};
module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  const isBlacklisted = await BlackListedTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await CaptainModel.findById(decoded._id);
    req.captain = captain;

    return next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorized" });
  }
};
