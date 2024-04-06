const mongoose = require("mongoose");

const connectDb = async ()=>{
    try{
      await mongoose.connect(process.env.DATABASE,{
        useNewUrlParser : true,
        useUnifiedTopology:true
      });
      console.log("mongodb connected");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDb;