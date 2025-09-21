const mongoose=require('mongoose')
 const StudentSchema = new mongoose.Schema({
    _id:{type:Number,required:true},
   FullName:{type:String,required:true},
   Username:{type:String,Number,requestd:true},
   Age:{type:Number,required:true},
   EmailAddress: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  },
    Password:{type:Number,requestd:true},
   ConfirmPassword :{type:Number,requestd:true}
 })
const mymodel= mongoose.model
('student',StudentSchema,'Student');
module.exports=mymodel;
