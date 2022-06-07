const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL,
    {
      useNewUrlParser:true,
      useUnifiedTopology:true,
    }
    ).then(()=>console.log('Connected to mongoDB'));

const userSchema=new mongoose.Schema({

    email:String,
    password:String,
    isAdmin:Boolean,

})

module.exports=mongoose.model('User',userSchema);
 

