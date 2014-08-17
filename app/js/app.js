'use strict';

/* App Module */

var ffApp = angular.module('ffApp', [
  'ngRoute',

  'ffControllers',
  'ffFilters',
  'ffServices'
]);

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
        // controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/rankings'
      });
  }]);
