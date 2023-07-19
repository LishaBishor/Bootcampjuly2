const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
  name:String,
   emailid:String,
   address:String,
   phoneno:String,
   username:String,
   password:String
}
 );
const userData=mongoose.model('collectionuser',UserSchema);
module.exports=userData;




