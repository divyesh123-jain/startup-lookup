const mongoose = require('mongoose')
const {Schema} = mongoose

const StartUpSchema =new Schema({
    name:{type:String,required:true},
    uid:{type:String,required:true},
    founder:{type:String,required:true},
    cofounder:{type:String,required:true},
    ceo:{type:String,required:true},
    cto:{type:String,required:true},
    cfo:{type:String,required:true},
    type:{type:String,required:true},
    age:{type:Number,required:true},
    AvgRev:{type:Number,required:true},
    RevAgainstGoal:{type:Number,required:true},
    Users:{type:Number,required:true},
    expEmployee:{type:Number,required:true},
    expMarketing:{type:Number,required:true},
    expResources:{type:Number,required:true},
    inflow:{type:Number,required:true},
    outflow:{type:Number,required:true},
    "APR21-JUN21Inflow":{type:Number,required:true},
    "APR21-JUN21Outflow":{type:Number,required:true},
    "JAN22-DEC22Inflow":{type:Number,required:true},
    "JAN22-DEC22Outflow":{type:Number,required:true},
    "JUL21-SEPT21Inflow":{type:Number,required:true},
    "JUL21-SEPT21Outflow":{type:Number,required:true},
    "OCT21-DEC21Inflow":{type:Number,required:true},
    "OCT21-DEC21Outflow":{type:Number,required:true},
    employee:{type:Number,required:true},
    gst:{type:String,required:true},
    desc:{type:String,required:true},
})

module.exports = mongoose.model('startups',StartUpSchema);