const express = require('express');
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
    
if(process.env.NODE_ENV === "production"){
    console.log("Production");
   
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
    });

    app.post('/register', require('./Routes/routes'));
    
}else{
    console.log("Development");
    app.post('/register', require('./Routes/routes'));
}

app.listen(port, console.log(`Server running on port ${port}`));