const express = require('express')
const router = express.Router()
const {createUser, loginUser,getUser,getAllUsers,getAllInvesters, getUserById,updateUser} = require('../Controllers/LoginController')
const { body } = require('express-validator');
const fetchuser = require('../Middleware/fetchuser.js');
const { route } = require('./AddRoute');


router.route('/login').post(loginUser);
router.route('/getuser').get(fetchuser,getUser);
router.route('/getallusers').get(getAllUsers);
router.route('/getallinvesters').get(getAllInvesters);
router.route('/getuserbyid').get(getUserById);
// router.route('/delete/:id').delete(deleteUser);
router.route('/update/:id').patch(updateUser);
router.route('/createuser')
    .post([
        body('password','Length of password must be atleast 6 characters').isLength({min:6})],
        createUser);


module.exports = router;