const Add = require('../Schema/StartUpSchema');
const createTask = async(req,res)=>{
    try{
        const creation = await Add.create(req.body)
        res.status(200).json({msg:"Task Added Successfully"})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const getStartUps = async(req,res)=>{
    try{
        const {uid} = req.body;
        const data = await Add.find({uid})
        const allData = await Add.find({})
        if(data){
            res.status(200).json({myStartups:data,allStartups:allData})
            return;
        }
        res.status(200).json({allStartups:allData})  
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const getStartUpsByName = async(req,res)=>{
    try{
        const {name} = req.params
        const startup = await Add.findOne({name})
        res.status(200).json({startup})
    }
    catch(err){
        res.status(500).json({err})
    }
}

const getCategory = async(req,res)=>{
    try{
        const {category} = req.params
        const startup = await Add.find({type:category})
        res.status(200).json({startup})
    }
    catch(err){
        res.status(500).json({err})
    }
}

module.exports = {createTask,getStartUps,getStartUpsByName,getCategory}