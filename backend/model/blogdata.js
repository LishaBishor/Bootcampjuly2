const mongoose=require('mongoose');
const BlogSchema=mongoose.Schema({
    userId:String,
    title:String,
    description:String,
    urlToImage:String,
    publishedAt:{
        type:Date,
        default:new Date()
    }
});
const BlogData=mongoose.model('collectionblog',BlogSchema);
module.exports=BlogData;