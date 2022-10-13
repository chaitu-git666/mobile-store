let express = require("express");
let mongoose=require("mongoose");
const cors = require("cors");
const router = require("./routes/mobile-routes");
let app=express();

app.use(express.json())
app.use(cors());
//middlewares
app.use("/mobiles",router)
mongoose.connect("mongodb+srv://admin:cV1r1Q1LNqlm66Ap@cluster0.4myuxup.mongodb.net/mobileStore?retryWrites=true&w=majority")
.then(()=>console.log("connected to DataBase"))
.then(()=>{
    app.listen(8000)
}).catch((err)=>console.log(err));

//cV1r1Q1LNqlm66Ap

