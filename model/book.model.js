const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    tital:{type:String,required:true},
    author:{type:String,required:true},
    genre:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true}
},{
    versionKey:false
})

const BookModel = mongoose.model("book",bookSchema);

module.exports = {
    BookModel
}