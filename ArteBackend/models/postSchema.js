'use strict';
/** 
 * @var mongoose using to define the schema 
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/** 
 * DB Schema/model created 
*/
const postSchema = new Schema({
    //title of the post
    title:{
        type: String,
        required: [true, "Title is required"]
    },
    //content of the post
    content:{
        type:String,
        required: [true, "Content is required"]
        // default: Date.now
    },
    //created date, takes the then current date
    createdDate:{
        type:Date,
        default:Date.now
    },
    //modified date, takes the then current modified date
    modifiedDate:{
        type:Date,
        default:Date.now
    }
},{
    versionKey: false
});
/** 
 * function to get the ID in form of an id instead of _id which is the default mongo collection id 
*/
postSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
postSchema.set('toJSON', {
    virtuals: true
});
/** 
 * @exports module the mongo model based on the toDoSchema is exported 
*/
module.exports = mongoose.model("posts", postSchema);