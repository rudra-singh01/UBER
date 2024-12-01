const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "First Name should be at least 3 characters long"],
        },
        lastname: {
            type: String,
            minlength: [3, "Last Name should be at least 3 characters long"],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Email should be at least 5 characters long"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"]
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    socketId: {
        type: String,
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3, "Color should be at least 3 characters long"],
        },
        plate:{
            type: String,
            required: true,
            unique: true,
            minlength: [3, "Plate Number should be at least 7 characters long"],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, "Capacity should be at least 1"],
        },
        vehicelType:{
            type: String,
            required: true,
            enum: ["car" , "motorcycle", "auto"],
        },
        
    },
    location:{
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
    
})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10);
    
}

const CaptainModel = mongoose.model('Captain', captainSchema);

module.exports = CaptainModel;