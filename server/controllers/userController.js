const signupUser = (req, res) =>{
    res.json({message: 'Register User'})
    res.send("register")
}
module.exports = {signupUser}