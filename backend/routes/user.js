const express=require('express');
const jwt=require('jsonwebtoken')
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
//router.use(express.urlencoded({extended: true}));
                                                                                                                                                                                                                                                         

const userdata = require('../model/userdata');
//post....login api
router.post('/login', async(req,res)=>{
    
    
        let username=req.body.username;
        let password=req.body.password;
        const user= await userdata.findOne({username:username});
        if(!user){
           res.json({message:"user not found"}) 
        }
    try{  
        if(user.password==password){
           jwt.sign({email:username,id:user._id},"ictak",{expiresIn:'1d'},
           (error,token)=>{
            if (error) {
               res.json({message:"Token not generated"}) 
            } else {
                res.json({message:"Login Successfully!!!",token:token,data:user})

            }
           }
           )} 
        else{
            res.json({message:"Login Failed"})
        }
    }catch(error){
        res.status(400).json("error in login");
    }
})
//post...Signup api
router.post("/signup",async(req,res)=>{
    try{
        const item=req.body;
        newItem=new userdata(item);
        const savedata=await newItem.save();
        res.status(200).json({message:'Registered Successfully'})
    }catch(error){
        res.status(400).json(" Can not Register")
    }
})
module.exports=router;