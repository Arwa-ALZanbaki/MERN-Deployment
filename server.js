// const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors') // This is new
const app = express();


app.use(cors()) // This is new

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the pets routes function from our pet.routes.js file
const AllMyPetsRoutes = require("./server/routes/pet.routes");
AllMyPetsRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
