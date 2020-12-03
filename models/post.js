const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        //required: "Title is required",
        //minlength: 4,
        //maxlength: 150
    },
    body:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Post", postSchema);