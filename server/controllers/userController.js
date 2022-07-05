const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = (req, res) =>{
    let password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(hashedPassword);
}
module.exports = {registerUser}