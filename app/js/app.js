'use strict';

/* App Module */

var ffApp = angular.module('ffApp', [
  'ngRoute',
  'ngResource',

  'LocalStorageModule',

  'ffControllers',
  'ffFilters',
  'ffServices',
  'ffResources'
]);

ffApp.constant('REMOTE_HOST','http://ff-rankings.herokuapp.com/')
     .constant('LOCAL_HOST','http://localhost:3000/');

ffApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/rankings', {
        templateUrl: 'templates/rankings.html',
        controller: 'RankingsCtrl'
      }).
      when('/draft-aid', {
        templateUrl: 'templates/draft-aid.html',
        controller: 'DraftAidCtrl'
      }).
      when('/about', {
        templateUrl: 'templates/about.html'
      }).
      otherwise({
        redirectTo: '/rankings'
      });
  }]);

ffApp.config(['localStorageServiceProvider',
  function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('jayzhengff_');
  }]);

