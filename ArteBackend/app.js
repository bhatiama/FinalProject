'use strict';
/** 
 * @exports module for routing the request to the routes also exporting the same 
*/
module.exports = function(app){
    // //initializing db model
    // const toDoModel = require('./models/toDoSchema');
    // //initializing routes
    const postRoutes = require('./routes/postRoutes');
    postRoutes(app);
    console.log("here")
}