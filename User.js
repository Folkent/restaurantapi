const  Mongoose  = require("mongoose");

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
     Review.create(req.body).then (function(review) {
         res.send(review)
     })
 });