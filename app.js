// console.log ("Hola Mundo");
/*
Customer satisfaction API
*/

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Global app object
const app = express();

// Middleware config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.get("/", function (req, res) {
    res.send("Welcome to customer custom API!");

});

const { Mongoose } = require("mongoose");

const ReiewSchema = Mongoose.Schema({
    locationId: {
        type: Number,
        min: 0,
        require: true
    },
    score: {
        type: Number,
        min: 1,
        max: 5,
        require: true
    },
    DateTime: {
        type: Date,
        default: Date.now
    }
})
 const Review = Mongoose.model("review", Review.Schema);
 
 app.post("/review", function(req, res) {
     Review.create(req.body).then(function(review) {
         res.send(review)
     })
 });

// Database connection
mongoose.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true }
)


// Bootstrap server
const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on port ${server.address().port}`);
});

