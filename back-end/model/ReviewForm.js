import mongoose from "mongoose";
const {Schema, model} = mongoose;

const ReviewSchema = Schema({

  name: {
    type: String,
    required: [true, "Name is required"]

  },

  email: {

    type: String,
    required: [true, "Email is required"]

  }

 

});

const classDB = model("class", classSchema);

