//ari videos yha pe upload ba in videos main se kon konsi video ek section ke andar aygi iske liye section part 
//schema main subsection ko array ke andar refrence diya gya hai


const mongoose = require('mongoose');
const SubSectionSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    timeDuration:{
        type:String,
    },
    description:{
        type:String,
    },
    videoUrl:{
        type:String,
    },
});

module.exports = mongoose.model("SubSection", SubSectionSchema);