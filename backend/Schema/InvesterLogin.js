const mongoose = require('mongoose')
const {Schema} = mongoose

const LoginSchema =new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    type:{type:String,default:"Invester"},
    age:{type:Number,required:true},
    yearsExp:{type:Number,required:true},
    gender:{type:String,required:true},
    noOfStartupsInvestedIn:{type:Number,required:true},
    typeOfInvester:{type:String,required:true},
    interests:{type:Array,required:true},
    bio:{type:String,required:true}
})

module.exports = mongoose.model('investerlogins',LoginSchema);