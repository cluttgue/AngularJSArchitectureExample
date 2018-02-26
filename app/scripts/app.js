var app = angular.module("rubick", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
     .when("/", {
        templateUrl : "app/views/seguro/seguroTest.html"
    })
    .when("/london", {
        templateUrl : "app/views/london.html"
    })
    .when("/paris", {
        templateUrl : "app/views/paris.html"
    })
    .otherwise({
        redirectTo : "/"
    });
});