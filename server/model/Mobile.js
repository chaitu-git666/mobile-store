const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mobileSchema = new Schema({
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    available:{
        type:Boolean,
    },
    image:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Mobile",mobileSchema);

