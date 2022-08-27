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

module.exports = {createTask}