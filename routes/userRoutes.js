const express = require('express');

const {create_user,delete_user,update_user,getAllusers,getById,login_user} = require('../controllers/userController');

const router = express.Router();
router.get('/users',getAllusers);
router.post('/users/register',create_user);
router.get('/users/:id',getById);
router.delete('/users/:id', delete_user);
router.put('/users/:id',update_user);
router.post('/users/login',login_user);

module.exports=router;