const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    password: [{type:String, required:true}], 
    from:{type:Array},
    country:{type:String, required:true},
    image:{type:String, required:true},
    uniqueString: {type:String, required:true},
    verification: {type:Boolean, required:true} //prof dice emailVerificado
    
})

const User = mongoose.model("users", userSchema)
module.exports = User