const express = require("express");
const { BookModel } = require("../model/book.model");
const bookRouter = express.Router()

bookRouter.get("/",async(req,res)=>{
  try{
    const books = await BookModel.find();
    res.status(200).json(books)
  }catch(err){
    res.status(400).json({})
  }
})

module.exports = {
    bookRouter
}