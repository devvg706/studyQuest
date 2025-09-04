//this rating and review is for our whole app and not for courses

const mongoose = require('mongoose');
const RatingAndReview = new mongoose.Schema({
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
   },
   course:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Course",
   },
   rating:{
    type:String,
    required:true,
   },
   review:{
    type:String,
    required:true,
   }
});

module.exports = mongoose.model("RatingAndReview", RatingAndReview);