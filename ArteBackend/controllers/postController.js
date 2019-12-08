
'use strict';
/** 
 * @var postService this variable takes us to the toDoService.js
*/
// const postService = require('../services/postService');

/** 
 * @exports list this function exports as .list can be accessed by postController.list in the toDoRoutes GET Route to for /posts
 * Enables the Read Operation to get all the posts from the database
 * @param request this variable saves the request to enable console logging
 * @param response this variable helps us send the response  
*/
exports.list = function (request, response) {
    const posts = [
        {
            id: "asdadasdsda",
            title: "post from server",
            content: "from server hope this works"
        }
    ];
    response.json({
        posts: posts
    })
};