const mongoose = require('mongoose')
const uuidv1 = require('uuidv1')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        trim: true,
        required: true,
    },
    hashed_password:{
        type: String,
        required: true,
    },
    
    salt: String,
        created:{
             type: Date,
             default: Date.now,
    },
    update:Date
});
//virtual field
userSchema.virtual('password')
    .set(function(password){
        this._password = password
        // generate s timestamp
        this.salt = uuidv1()
        // ecrypt password
        this.hashed_password = this.ecryptPassword(password);
    })
    .get(function(){
        return this._password;
    })

userSchema.methods={
    ecryptPassword: function(password){
        if(!password) return "";
        try {
            return crypto.createHmac ('sha1',this.salt)
                             .update(password)
                             .digest('hex')
        } catch (error) {
            return "";
        }
    }
}
module.exports = mongoose.model("User", userSchema);