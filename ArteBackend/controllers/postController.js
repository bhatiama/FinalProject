
'use strict';
/** 
 * @var postService this variable takes us to the toDoService.js
*/
const postService = require('../services/postService');

/** 
 * @exports list this function exports as .list can be accessed by postController.list in the toDoRoutes GET Route to for /posts
 * Enables the Read Operation to get all the posts from the database
 * @param request this variable saves the request to enable console logging
 * @param response this variable helps us send the response  
*/
exports.list = function (request, response) {
    console.log(`${request.url} and ${request.method}`);
    const resolve = (posts) => {
        response.status(200);
        response.json(posts);
    };
    postService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/** 
 * @exports post this function exports as .post can be accessed by toDoController.post in the toDoRoutes POST Route to for /todos
 * Enables the Create Operation to create a specific todo
 * @param request this variable saves the request to enable console logging
 * @param response this variable helps us send the response  
*/
exports.post = function (request, response) {
    console.log(`url: ${request.url} and method: ${request.method} and body contains the post: ${request.body}`);
    const newPost = Object.assign({}, request.body);
    const resolve = (post) => {
        response.status(200);
        response.json(post);
    };
    postService.save(newPost)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
}