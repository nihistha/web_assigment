//import express
const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const connectDB = require('./database/database');


//creating an express app
const app = express();


//Json config
app.use(express.json());
//configuration dotenv
dotenv.config();

//connecting to the database
connectDB()

//defining a port
const PORT = process.env.PORT;

app.use('/api/user',require('./routes/user_routes'))
app.use("/api/reservations", require("./routes/reservation_routes"));
app.use("/api/appointments", require("./routes/appointment_routes"));

app.listen(PORT,()=>{
    console.log(`Server is running on port sever ${PORT}`  )
})
