/** * Main AngularJS Web Application */
var app = angular.module('numberShapesPublic', [ 'ngRoute' ]);
/**
 * * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  // Home
  .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  // Pages
  .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
  .when("/learnMath", {templateUrl: "partials/learnMath.html", controller: "PageCtrl"})
  /* etc… routes to other pages… */
  // Blog
  .when("/appStore", {templateUrl: "partials/appStore.html", controller: "BlogCtrl"})
  // else 404
  .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});  
}]);


/**
* Controls the Blog
*/
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
console.log("Blog Controller reporting for duty.");
});

/**
* Controls all other Pages
*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  
      document.write('<script src=js/vendor/' +
      ('__proto__' in {} ? 'zepto' : 'jquery') +
      '.js><\/script>')
  
  //initializing all plugin -------->

  $(document).foundation();
 
  
});