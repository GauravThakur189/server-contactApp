const express = require("express");
const dotenv = require( "dotenv" );
const connectDb = require("./database/database.js");
// const Contact = require("./modules/contact.js");
const contactRoutes = require("./routes/contact.js");
const multer = require("multer");



const app = express();
dotenv.config();

app.use(express.json());
// app.get("/",(req,res)=>{
//     res.status(200).json("hello world")
// })

// UPLOAD IMAGE

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,"image.png");
    }
})

const upload = multer({storage:storage})


app.post("api/upload",upload.single('image'), (req,res) => {
    res.status(200).json({status:"success",msg:"image has been uploaded"})
} )

app.use('/contact',contactRoutes);

app.listen(process.env.PORT,()=>{
    connectDb();
    console.log("backend started at" + process.env.PORT);
});