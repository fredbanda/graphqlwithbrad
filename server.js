const express = require("express");
const app = express();
const schema = require("./schema/schema");
const colors = require('colors');
const {graphqlHTTP} = require("express-graphql");
const connectDB = require('./config/db');
require('dotenv').config();

// connect to database

connectDB();

const PORT = process.env.PORT || 4000

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))