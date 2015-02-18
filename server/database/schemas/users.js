////////////////////////////////////////////////////////////////////////////////
 /*                         *
 ** User Schema            **
 *                         */
////////////////////////////////////////////////////////////////////////////////

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

/***************/
 //            //
 // Define     //
 //            //
/***************/
var userSchema = new Schema({
    firstname: { type: String, required: true, trim:true},
    lastname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    profile: {} // for extra information you may / may not want
    // role: {
    //     type:String,
    //     enum: roles,
    //     required: true,
    //     default: roles[0]
    //     },
    // admin: {
    //     type: Boolean,
    //     default: false,
    // },
    // photoUrl: String,
    // angelListId: String,
    // angelListProfile: Schema.Types.Mixed,
    // angelToken: String,
    // githubProfile: Schema.Types.Mixed,
    // githubToken: String,
    // angelList: Schema.Types.Mixed,
    // created: {
      // type: Date,
      // default: Date.now
    // },
    // updated:  {
      // type: Date,
      // default: Date.now
    // },
    // angelUrl: String,
    // twitterUrl: String,
    // facebookUrl: String,
    // linkedinUrl: String,
    // githubUrl: String,
    // posts: {
      // own: [Schema.Types.Mixed],
      // likes: [Schema.Types.Mixed],
      // watches: [Schema.Types.Mixed],
      // comments: [Schema.Types.Mixed]
    // },
    // stripeToken: Schema.Types.Mixed
});

/****************************/
 //                         //
 // Check for user Auth     //
 //                         //
/****************************/

// A method that's called every time a user document is saved...
userSchema.pre('save', function (next) {

    var user = this;

    // If the password hasn't been modified, move along...
    if (!user.isModified('password')) {
        return next();
    }

    // generate salt
    bcrypt.genSalt(10, function(err, salt){

        if (err) {
            return next(err);
        }

        // create the hash and store it
        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

/*************************************/
 //                                  //
 // Password Verification Helper     //
 //                                  //
/*************************************/
// Password verification helper
userSchema.methods.comparePassword = function (triedPassword, cb) {
    bcrypt.compare(triedPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch);
    });
};

/****************************/
 //                         //
 // Export Primary Model    //
 //                         //
/****************************/
var User = mongoose.model('User', userSchema);

module.exports = User;

