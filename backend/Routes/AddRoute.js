const express = require('express')
const router = express.Router()
const CreateStartup = require('../Middleware/CreateStartup.js');
const {createTask} = require('../Controllers/AddControllers'); 

router.route('/').post(CreateStartup,createTask)

module.exports=router;