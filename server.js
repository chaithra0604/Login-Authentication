const http = require ('http');
const express = require ('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost:27017",{ 
    useNewUrlParser : true,
     useUnifiedTopology : true
})
.then ( () => {
    console.log("db connected");
})
.catch( (err) => {
    console.log(err);
})

app.listen('3000',() => {
    console.log("Server is running");
})