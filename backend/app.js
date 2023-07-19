const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const cors=require('cors')
const app=new express();
require('dotenv').config();
require("./db/mongodb")
app.use(morgan('dev'));
app.use(cors());
const blogsapi=require('./routes/blogs');
var userapi=require('./routes/user')
app.use('/api',blogsapi);
app.use('/api',userapi);
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})