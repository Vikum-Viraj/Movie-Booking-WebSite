import mongoose from "mongoose";

const adminSchem = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        minLength:5
    },

    addedMovie: [
    {
        type:mongoose.Types.ObjectId,
        ref:"Movie",
    },

   ],

});


export default mongoose.model("Admin",adminSchem);


