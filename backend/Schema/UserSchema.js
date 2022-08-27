const mongoose = require('mongoose')
const {Schema} = mongoose

const LoginSchema =new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    type:{type:String,default:"User"},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    bio:{type:String,required:true},
})

module.exports = mongoose.model('userlogins',LoginSchema);