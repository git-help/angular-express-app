////////////////////////////////////////////////////////////////////////////////
 /*                         *
 ** Post Schema            **
 *                         */
////////////////////////////////////////////////////////////////////////////////
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// test create of post
// db.posts.insert({title: "test post", text: "hheere sa sa df ", url: "google.com" })
// Define the User Schema
var postSchema = new Schema({
    title: {
        required: true,
        type: String,
        trim: true,
        match: /^([\w ,.!?]{1,100})$/
      },
    url: {
        type: String,
        trim: true,
        max: 1000
    },
    text: {
        type: String,
        trim: true,
        max: 2000
    },
    // comments: [{
    //     text: {
    //         type: String,
    //         trim: true,
    //         max:2000
    //     },
    //     author: {
    //       id: {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User'
    //       },
    //       name: String
    //     }
    // }],
    // watches: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'User'
    // }],
    // likes: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'User'
    // }],
    // author: {
    //     id: {
    //       type: Schema.Types.ObjectId,
    //       ref: 'User',
    //       required: true
    //     },
    //     name: {
    //       type: String,
    //       required: true
    //     }
    // },
    // created: {
    //     type: Date,
    //     default: Date.now,
    //     required: true
    // },
    // updated:  {
    //     type: Date,
    //     default: Date.now,
    //     required: true
    // }
});

/****************************/
 //                         //
 // Change data on save     //
 //                         //
/****************************/

// a method called each time a Post is saved...
postSchema.pre('save', function (next) {
      if (!this.isModified('updated')) this.updated = new Date;
      next();
});

/****************************/
 //                         //
 // Export Primary Model    //
 //                         //
/****************************/

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

