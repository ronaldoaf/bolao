var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
$routeProvider.
	when('/',{controller:'rankingController', templateUrl:'ranking.html'}).
	when('/palpites',{controller:'palpitesController',templateUrl:'palpites.html'}).
    when('/login',{controller:'palpitesController',templateUrl:'login.html'}).
	otherwise({redirectTo:'/'});
}]);
app.controller('rankingController', function ($scope,$http) {


	
});


app.run(['$rootScope',function($rootScope){

	console.log('app.run');

}]);