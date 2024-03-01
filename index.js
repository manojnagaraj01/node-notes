const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//rest object
const app= express();
const {connectDB} = require("./config/db.js")

const cors = require("cors")

//routes import
const authRoutes= require("./routes/authRoute.js");


//configure evv
dotenv.config();
const PORT =process.env.PORT



//middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin:'*'
}))

//routes
app.use('/api/auth', authRoutes);

//rest api
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to ECommerce Website</h1>");
})

app.listen(PORT, async()=>{
    try{
        await connectDB()
        console.log(`Server runnig on ${process.env.DEV_MODE} mode on port ${PORT}`);
    }
    catch(err){
        console.log(err, "error while loading");
    }

});