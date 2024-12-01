const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type:String,
            required: true,
            minlength: [3,"First Name Should be at Least 3 Characters Long"],
        },
        lastname:{
            type:String,
            minlength: [3,"First Name Should be at Least 3 Characters Long"],
        }
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
        select:false,
    },
    sockedId:{
        type: String,
    }
})

userSchema.methods.generateAuthToken = function() {
    
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10);
    
}

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;