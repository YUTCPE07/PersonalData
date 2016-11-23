var App = angular.module('MyApp', ['ngRoute','autocomplete']);
App.config(function($routeProvider,$locationProvider)
{
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/',{
            templateUrl : '/view/home.html',
            controller : 'controllerHome'
        })
        .when('/admin:params',{
            templateUrl : '/view/admin.html',
            controller : 'controllerHome'
        })
        .when('/:params',{  //dynamic view from params
            templateUrl : function($routeParams){
                return './view/'+$routeParams.params +'.html';
            },
            controller : 'controllerHome'
        })
        .otherwise({
            redirectTo : '/'
        });
});


