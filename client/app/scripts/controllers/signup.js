'use strict';
 
angular.module('githelpApp')
  .controller('SignupCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    
    // Here we're creating some local references
    // so that we don't have to type $scope every time
    var user,
        signup;
 
    // Here we're creating a scope for our Signup page.
    // This will hold our data and methods for this page.
    $scope.signup = signup = {};
 
    // In our signup.html, we'll be using the ng-model
    // attribute to populate this object.
    signup.user = user = {};
 
    // This is our method that will post to our server.
    signup.submit = function () {
      
      // make sure all fields are filled out...
      // aren't you glad you're not typing out
      // $scope.signup.user.firstname everytime now??
      if (
        !user.firstname ||
        !user.lastname ||
        !user.email ||
        !user.password1 ||
        !user.password2
      ) {
        alert('Please fill out all form fields.');
        return false;
      }
 
      // make sure the passwords match match
      if (user.password1 !== user.password2) {
        alert('Your passwords must match.');
        return false;
      }
 
      // Make the request to the server ...
      var request = $http.post('/signup', user);
 
      // we'll come back to here and fill in more when ready
      request.success(function (data) {
        // our json response is recognized
        // we can verify in the console...
        console.log(data);
        // and then redirect the user to the post page
        $location.path("/posts");
      });
 
      request.error(function (data) {
        console.log(data);
      });
 
    };
    
  }]);