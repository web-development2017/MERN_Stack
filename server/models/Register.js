const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const RegisterSchema = new mongoose.Schema({
    username: { 
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});

RegisterSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        {_id:this._id},
        process.env.JWTPRIVATEKEY,
        {expiresIn:"7d"},   
    )
    return token
};

module.exports = mongoose.model('Register', RegisterSchema);