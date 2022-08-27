const express = require('express')
const router = express.Router()
const CreateStartup = require('../Middleware/CreateStartup.js');
const {createTask,getStartUps,getStartUpsByName} = require('../Controllers/AddControllers'); 

router.route('/').post(CreateStartup,createTask).get(CreateStartup,getStartUps);
router.route('/getdata').get(getStartUpsByName)
module.exports=router;