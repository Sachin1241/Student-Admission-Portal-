const express= require('express')
const app = express();
const mongoose = require('mongoose')
const TEMP=require('./model/Student')
const cors = require('cors');
const path=require('path')
app.use(express.static('public')),
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/Addmision')
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
});
app.get('/Show',async(req,res)=>{
 let data = await TEMP.find();
 res.json(data);
});
app.get('/view/:id', async (req, res) => {
  let id = req.params.id;  
 let data = await TEMP.findById(id);
res.json(data);
});
app.post('/insert',async(req,res)=>{
let data=await new TEMP (req.body)
let result = await data.save();
res.json(result);
res.send("Data insert Successfully")
});
app.put('/myupdate/:id',async(req,res)=>{
let data = req.params.id;
let {FullName,EmailAddress,Age,Username,Password,ConfirmPassword}= req.body
let result= await  TEMP.findByIdAndUpdate(data,{FullName,EmailAddress,Age,Username,Password,ConfirmPassword},{new:true});
res.json(result);
res.send("Data is update Successfully")
});
app.delete('/mydelete/:id',async(req,res)=>{
let data=req.params.id;
let result= await TEMP.findByIdAndDelete(data)
res.json(result)
res.send("Data is delete Successfully")
});
app.listen(2000,()=>
{
 console.log("app.ruuning http://localhost:2000")
});
