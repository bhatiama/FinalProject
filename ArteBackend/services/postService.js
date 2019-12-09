
'use strict';
/** 
 * @var mongoose this gets us the mongoose package
 * @var post this gets us the toDos model from the db
*/
const mongoose = require('mongoose'),
    Post = mongoose.model('posts');

/** 
 * @exports anon this is a search function that searches for the documents in the collection
*/
exports.search = function (params) {
    const promise = Post.find(params).exec();
    return promise;
};
/*
* @exports .save this is save function that takes in the 
* @param post and saves it to the db 
*/
exports.save = function (post) {
   const newPost = new Post(post);
   const promise = newPost.save();
   return promise;
};