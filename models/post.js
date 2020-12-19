const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
        //required: "Title is required",
        //minlength: 4,
        //maxlength: 150
    },
    body:{
        type: String,
        required: true
    },
    photo:{
        data: Buffer,
        contenType: String
    },
    postedBy:{
        type: ObjectId,
        ref: 'User'
    },
    created:{
        type: Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Post', postSchema);