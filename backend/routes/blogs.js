const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken')
router.use(express.json());
router.use(express.urlencoded({extended:true}));
//router.use(express.urlencoded({extended: true}));
                                                                                                                                                                                                                                                         
const blogdata=require('../model/blogdata');
//get....to view all blogs
router.get('/viewblogs/:token', async(req,res)=>{
    const data= await blogdata.find();
    try{
       jwt.verify(req.params.token,"ictak",(error,decoded)=>{
        if (decoded && decoded.email) {
            res.json(data);
        } else {
            res.json({message:"Unauthorised User"})
            
        }
       })
       
    }catch(error){
        res.status(400).json("cannot get");
    }
})
//post.... to add posts
router.post("/addblogs",async(req,res)=>{
    try{
        const item=req.body;
       const  newItem=new blogdata(item);
       jwt.verify(req.body.token,"ictak",(error,decoded)=>{
        if(decoded && decoded.email){
            newItem.save();
            res.json({message:'Added blog data successfully'})
        }else{
            res.json({message:"Unauthorised User"})
        }
       })
         
    }catch(error){
        res.json({message:" can not add"})
    }
})

//delete...to delete a post
router.delete('/deleteblog/:id',async(req,res)=>{
    try {
        let id=req.params.id;
        const deletedata=req.body
        const deleted=await blogdata.findByIdAndDelete(id,deletedata)
        res.json({message:'deleted blog successfully'})
        
    } catch (error) {
        res.json({message:" can not deleted"})
       
    }
})
//..to update....
router.put('/updateblogs/:id',async(req,res)=>{
    try {
       let id=req.params.id;
      updateddata=req.body
     // const updated=await EmpData.updateOne(updatedata);
      const updated=await blogdata.findByIdAndUpdate(id,updateddata)
      // console.log('updated')
       res.json({message:"Updated sucessfully"})
      // res.status(200).json(data);
   } catch (error) {
        res.status(400).json("Unable to Update"); 
   }
})

module.exports=router;