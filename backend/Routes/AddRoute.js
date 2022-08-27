const express = require('express')
const router = express.Router()
const CreateStartup = require('../Middleware/CreateStartup.js');
const {createTask,getStartUps} = require('../Controllers/AddControllers'); 

router.route('/').post(CreateStartup,createTask).get(CreateStartup,getStartUps);

module.exports=router;