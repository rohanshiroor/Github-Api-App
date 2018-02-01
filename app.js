(function(){
    var app = angular.module("githubViewer",["ngRoute"]);
    app.config(function($routeProvider){
        $routeProvider
        .when("/main",{
            templateUrl:"main.html",
            controller: "MainController"
        })
        .when("/user/:username",{
            templateUrl:"user.html",
            controller:"UserController"
        })
        .when("/repo/:username/:response",{
           templateUrl:"repo.html",
            controller:"RepoController"
        })
        .when('/sampleDirective',{
            templateUrl:'SampleDirective.html',
            controller:'SampleDirectiveController'
        })
        .otherwise({redirectTo:"/main"});
    });
}());