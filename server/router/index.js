////////////////////////////////////////////////////////////////////////////////
 /*                   *
 ** Index of Routes  **
 *                   */
////////////////////////////////////////////////////////////////////////////////

module.exports = function (app) {

    // The signup route
    app.use('/signup', require('./routes/signup'));

    // The posts route
    app.use('/posts', require('./routes/posts'));

    // The users route
    app.use('/users', require('./routes/users'));
}