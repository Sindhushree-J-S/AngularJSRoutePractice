let app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/login",{
        templateUrl:"login.html"
    }).when("/register",{
        templateUrl:"register.html"
    }).when("/home",{
        templateUrl:"home.html"
    }).when("/aboutus",{
        templateUrl:"aboutus.html"
    }).otherwise({
        redirectTo:"/login"
    })
});
