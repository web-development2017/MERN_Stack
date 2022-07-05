const express = require('express');
const router = express.Router();
const path = require("path");
const cors = require('cors');
const bodyParser = require("body-parser");

require('dotenv').config();

const{ graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const { registerUser } = require('./controllers/userController');
const port = process.env.PORT || 5000;

const app = express();

//Connect to database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}));

app.use(bodyParser.json()) // for parsing application/json
// app.post('/auth/register', (req, res) => {    
//     let password = req.body.password;
//     console.log(password)
// });
app.post('/auth/register', registerUser);
    
if(process.env.NODE_ENV === "production"){
    console.log("Production");

    app.use('/auth/register', (req, res) => {
        res.send('register')
    })
   
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
    });
    
}else{
    console.log("Development");
}

app.listen(port, console.log(`Server running on port ${port}`));