const express = require('express');
const colors = require('colors');
const path = require("path");
const cors = require('cors')

require('dotenv').config();

const{ graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();

//Connect to database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}));

app.post('/auth/register', (req, res) => {
    res.send('hello world')
})

if(process.env.NODE_ENV === "production"){
    console.log("Production")
    // app.get('/', (req, res)=>{
    //     res.send(__dirname);
    // });
   
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
        // res.sendFile(path.join(__dirname+ '../client/build/index.html'));
    });
    
}else{
    console.log("Development")
    // app.get('/', (req, res)=>{
    //     res.send("Api running");
    // });
}

app.listen(port, console.log(`Server running on port ${port}`));