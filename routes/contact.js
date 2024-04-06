const express = require('express');
const Contact = require('../modules/contact.js');
const route = express.Router();

route.get("/",async(req,res)=>{
    try {
      const contacts = await Contact.find(req.body);
      res.status(201).json({status:"success",contacts});
    } catch (error) {
      res.sendStatus(403).json({status:"fail",error});
    }
})


route.post("/create",async(req,res)=>{
 try {
    const newContact = await Contact.create(req.body);
    res.status(200).json({status:"SUCCESS",newContact});
 } catch (error) {
    res.send(500).json({status:'ERROR',error});
 }
})

route.get("/:id",async(req,res)=>{
   try {
      const singleContact = await Contact.findById(req.params.id);
      res.status(200).json({status:"success contact",singleContact});
   } catch (error) {
      res.sendStatus(404).json({status:"Not Found",error})
   }
})

//update the user 

route.put("/update/:id",async(req,res)=>{
   try {
      const updateContacts = await Contact.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({status:"success update",updateContacts});
   } catch (error) {
      res.status(404).json({status:"failed",error});
   }
})

// delete the user
route.delete("/delete/:id", async(req,res)=>{
   try {
      const removeUser = await Contact.findByIdAndDelete(req.params.id);
      res.status(200).json({status:"successfully deleted",removeUser});
   } catch (error) {
      res.status(400).json({status:"Failed to Delete User",error});
   }
})

module.exports = route;