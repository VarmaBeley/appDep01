const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path =require("path")

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname,"./client/build")));


mongoose.connect("mongodb+srv://varmaB:varmaB@mycluster.y9icvof.mongodb.net/users?retryWrites=true&w=majority",
(err)=>{
if(err){
    console.log(err);
}else{
    console.log("connected to MDB");
   
}
})


app.get("/indianCricketers",(req,res)=>{

    res.json(["Rohit Sharma","Virat Kohli","KL Rahul","Hardik Pandya","surya Kumar"]);
});

let userSchema = new mongoose.Schema({
    name:String,
    email:{type:String, required:true, unique:true},
    age:{type : Number, min:18, max:100, required: true},
    batchID:Number,
    studentID:Number,
    gender:{type:String, required : true, enum:["Male","Female"]},
});

let User = new mongoose.model("students",userSchema);

app.get("/getUsers", async(req,res)=>{

    let userData = await User.find();

    res.json(userData);

});

app.listen(1234,()=>{
    console.log("listening to 1234");
});



