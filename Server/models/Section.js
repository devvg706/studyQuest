//yha pe sare sections upload honge with refrence ki konse section main konsi video hogi (refrence of subsection) ab section ka reference liya gya hai
//course schema main ye batane ke liye ki konse konse sections konse course ko belong krta hai 




const mongoose = require('mongoose');
const SectionSchema = new mongoose.Schema({
    sectionName:{
        type:String,
        trim:true,
        required:true,
    },
    subSection:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection",
    }],
});

module.exports = mongoose.model("Section", SectionSchema);