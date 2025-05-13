const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const UserModel = require("./models/Users")
const registermodel = require("./models/register")
const studentModel = require("./models/studentlist")

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json());
app.use(express.static('public'));
const dbtest = "";
mongoose.connect("mongodb+srv://vidhyabalajinina:vidhyabalaji@cluster0.6pxhhii.mongodb.net/StudentDatabase?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("Database connected successfully"))
    .catch((e) => console.log("Database connection failed" + e))
const userdata = [
    { email: 'vidhya@gmail.com', password: 'Pass1234' },
    { email: 'demo@gmail.com', password: 'helloWorld@123' },
]
app.post('/edit', function (req, res) {
    console.log(res);
    res.send(true);
})
// app.post('/add', function (req, res) {
//     console.log(res);
//     res.send(true);
// })
app.post('/register', async function (req, res) {
    console.log("body content :" + req.body.email);
    const user = await UserModel.findOne({ email: req.body.email });
    console.log("user find :" + user);
    if (user === null) {
        UserModel.insertOne({ email: req.body.email, password: req.body.password }).then(registeruser => {
            res.send("true")
        }).catch(err => {
            res.send("false")
        }
        )
    } else {
        res.send("User already exist")
    }
})
app.get("/login", async (req, res) => {
    const user = await UserModel.find({ email: req.query.UserName, password: req.query.password })
    if (user.length > 0) {
        res.send(user)
    }
    else {
        res.send(user)
    }

})
app.post("/add", async (req, res) => {
    const adddata = { regno: req.body.regno, name: req.body.name, age: req.body.age, course: req.body.course, CGPA: req.body.CGPA, address: req.body.address };
    console.log("Add api");
    console.log(adddata);
    const insertflag = await studentModel.insertOne(adddata);
    console.log(insertflag);
    if(insertflag._id != null && insertflag._id != "")
    {
        res.send(true)
        //return(true)
    }else{
        res.send(false)
        //return(false)
    }
})
app.listen("5000", function () {
    console.log("Server Successfully started in Port 5000........");

})
app.get("/test", (req, res) => {
   //const user = await UserModel.find({ email: req.query.UserName, password: req.query.password })
    res.send(true)
})

app.get("/", (req, res) => {
    res.status(200).json({ message: 'running' })
})