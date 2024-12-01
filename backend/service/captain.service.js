const CaptainModel = require('../models/captain.modle');

// Create Captain
module.exports.createCaptain = async({
    firstname , lastname, email, password, color, plate, capacity, vehicelType
})=>{
    if(!firstname ||!email ||!password ||!color ||!plate ||!capacity ||!vehicelType){
        throw new Error("All fields are required");
    }
    const captain = CaptainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicelType
        }
    })
    return captain;
}