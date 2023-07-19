const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.dbUrl)
.then(()=>{
    console.log('connected to MongoDb')
})
.catch((error)=>{
    console.log("ERROR!!! Connection lost:",error)
})