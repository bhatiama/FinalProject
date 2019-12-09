'use strict';
/** 
 * @exports anon exports the routes from the controller
 * Routes defined right now are 
 * 1. / root route
 * 2. /todos GET to get/read all the existing posts from the db
 * 3. /todos POST to add/create a POST and add it to the db
 * 4. /todos/:postID GET to read a specific post by getting the postid in the url
 * 5. /todos/:postID PUT to update a specific post
 * 6. /todos/:postID DELETE to delete a specific post
 * 
*/
module.exports = function(app){
    const postController = require('../controllers/postController');
    app.get('/', (req,res)=>{
        res.send("slash route");
    })
    //route for search and create
    app.route('/posts')
        .get(postController.list)
        .post(postController.post);
        
}
