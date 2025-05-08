const express = require("express")
const cors = require("cors")
const mongoose=require("mongoose")
const UserModel=require("./models/Users")
const registermodel=require("./models/register")

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(cors())
mongoose.connect("mongodb+srv://vidhyabalajinina:vidhyabalaji@cluster0.6pxhhii.mongodb.net/StudentDatabase?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("Database connected successfully"))
.catch((e)=>console.log("Database connection failed"+e))
const userdata=[
    {email:'vidhya@gmail.com',password:'Pass1234'},
    {email:'demo@gmail.com',password:'helloWorld@123'},
]
app.post('/edit',function(req,res)
{
    console.log(res);
    res.send(true);
})
app.post('/add',function(req,res)
{
    console.log(res);
    res.send(true);
})
app.post('/register',function(req,res)
{
    console.log(req);
    //UserModel.insertOne({email:'balaji@gmail.com',password:'Pass1234'})
// registermodel.create(req.body).then(registeruser=>{
//     res.json(registeruser)
// }).catch(err=>
// {
//     res.json(err);
// }
// )
})
app.get("/login",async(req,res)=>
{

    

    // UserModel.insertMany(userdata)
//    const user =new UserModel(userdata[0])
//    await user.save()
//    let ids = user.insertedIds;
    //  const loginuser = await UserModel.find({email:req.query.UserName});
    //  res.send(loginuser)
    // console.log(req.query);
    // console.log(req.query.UserName);
    // var result = false;
    // userdata.map((data)=>
    // {
    //     if(data.email===req.query.UserName  && data.password===req.query.password)
    //     { 
    //         result =true;
            
    //     }
    // })

    const user =  await UserModel.find({email:req.query.UserName , password:req.query.password})

    if(user.length > 0){
        res.send(true)
    }
    else{
        res.send(false)
    }


    
})
app.listen("5000", function () {
    console.log("Server Successfully started in Port 5000........");

})

app.get("/",(req,res)=>{
    res.status(200).json({message:'running'})
})