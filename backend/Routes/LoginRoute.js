const express = require('express')
const router = express.Router()
const {createUser, loginUser,getUser,deleteUser, updateUser} = require('../Controllers/LoginController')
const { body } = require('express-validator');
const fetchuser = require('../Middleware/fetchuser.js');


router.route('/login').post(loginUser);
router.route('/getuser').get(fetchuser,getUser);
// router.route('/delete/:id').delete(deleteUser);
router.route('/update/:id').patch(updateUser);
router.route('/createuser')
    .post([
        body('password','Length of password must be atleast 6 characters').isLength({min:6})],
        createUser);


module.exports = router;