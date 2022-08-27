const express = require('express')
const router = express.Router()
const CreateStartup = require('../Middleware/CreateStartup.js');
const {createTask,getStartUps,getStartUpsByName,getCategory} = require('../Controllers/AddControllers'); 

router.route('/').post(CreateStartup,createTask).get(CreateStartup,getStartUps);
router.route('/getdata/:name').get(getStartUpsByName)
router.route('/category/:category').get(getCategory)
module.exports=router;