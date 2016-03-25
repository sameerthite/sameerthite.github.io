var myPortfolio = angular.module("myPortfolio", ["ngRoute", "firebase", "angular-loading-bar", "ngAnimate"]);

myPortfolio.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl: "pages/home.html",
        controller: "MainController"
    }).
       when("/about", {
       	templateUrl: "pages/about.html",
       	controller: "AboutController"
    }).
       when("/education", {
        templateUrl: "pages/education.html",
        controller: "EducationController"
    }).
       when("/work", {
        templateUrl: "pages/work.html",
        controller: "MainController"
    }).
       when("/contact", {
        templateUrl: "pages/contact.html",
        controller: "ContactController"
    }).
    when("/websites", {
         templateUrl: "pages/websites.html",
         controller: "MainController"
     }).
     when("/mobile", {
          templateUrl: "pages/mobiles.html",
          controller: "MainController"
      }).
       when("/skills", {
        templateUrl: "pages/skills.html",
        controller: "SkillController"
    }).
    otherwise({
        redirectTo: "/"
    });
}]);

myPortfolio.controller('MainController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

  $scope.pageClass = 'page-contact';

  var ref = new Firebase('https://sameerportfolio.firebaseio.com/messages');
  
  $scope.messages = $firebaseArray(ref);

  $scope.addFormSubmit = function () {

    //assign values
    if($scope.fullname) { var fullname = $scope.fullname} else {var fullname = null;}
    if($scope.email) { var email = $scope.email} else {var email = null;}
    if($scope.phone) { var phone = $scope.phone} else {var phone = null;}
    if($scope.message) { var message = $scope.message} else {var message = null;}

    $scope.messages.$add({
      date: Firebase.ServerValue.TIMESTAMP,
      fullname: fullname,
      email: email,
      phone: phone,
      message: message
    });

    clearfields();

    $scope.reloadRoute = function() {
       $route.reload();
    }

    $scope.msg = "Contact form submitted successfully!";

  } //addformsubmit

  var reffeed = new Firebase('https://sameerportfolio.firebaseio.com/feedback');
  
  $scope.feedback = $firebaseArray(reffeed);

  $scope.addFeedback = function() {

    //assign values
    if($scope.feedbackname) { var feedbackname = $scope.feedbackname} else {var feedbackname = null;}
    if($scope.feedbackmessage) { var feedbackmessage = $scope.feedbackmessage} else {var feedbackmessage = null;}

    $scope.feedback.$add({
      date: Firebase.ServerValue.TIMESTAMP,
      feedbackname: feedbackname,
      feedbackmessage: feedbackmessage
    });

    clearfields();

    $scope.reloadRoute = function() {
       $route.reload();
    }

    $scope.fmsg = "Feedback submitted successfully!";

    // var query = reffeed.orderByChild("timestamp").limitToLast(25);

    // $scope.filteredMessages = $firebaseArray(query);

  }//feedback

  clearfields = function(){
    $scope.fullname = "",
    $scope.email = "",
    $scope.phone = "",
    $scope.message = ""
  } //clearfields

}]);

myPortfolio.controller("AboutController", function($scope) {
    $scope.pageClass = 'page-about';
}); //about controller

myPortfolio.controller("EducationController", function($scope) {
    $scope.pageClass = 'page-contact';
});

myPortfolio.controller("SkillController", function($scope) {
    $scope.pageClass = 'page-about';
});

myPortfolio.controller("ContactController", function($scope) {
    $scope.pageClass = 'page-contact';
});

