const express=require('express');
require('dotenv').config();
const app=express();
const Users=require('./connection')   //mongoose model will be returned
//create a DB Connection

const user=new Users({
    email:'hariharan@incedoinc.com',
    password:'123',
    isAdmin:true,
});

user.save();

app.listen(process.env.PORT,()=>{
    console.log(`Authentication Server running on PORT  ${process.env.PORT}` );
})




