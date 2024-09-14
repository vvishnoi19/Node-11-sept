const express=require("express")
const router=express.Router();
const usercontroller = require('../Controllers/usercontroller');
router.get('/users',(req,res)=>{
    usercontroller.getAllUsers(req,res);

})
router.get('/user/:id',(req,res)=>{
    usercontroller.getuser(req,res);

})
module.exports=router;