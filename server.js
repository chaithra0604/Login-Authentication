const http = require ('http');
const express = require ('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require ('./routes/Auth');
const proctedRoute = require('./routes/protectedRoute');

mongoose.connect("mongodb://localhost:27017/jwt",{ 
    useNewUrlParser : true,
     useUnifiedTopology : true
})

.then ( () => {
    console.log("db connected");
})
.catch( (err) => {
    console.log(err);
});

app.use(express.json());
app.use('/Auth',authRoutes);
app.use('/protected',proctedRoute);

app.listen('3000',() => {
    console.log("Server is running");
})


