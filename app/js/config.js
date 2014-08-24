// Constants
ffApp.constant('REMOTE_HOST_URL','http://ff-rankings.herokuapp.com/')
     .constant('LOCAL_HOST_URL','http://localhost:3000/')
     .constant('USE_LOCAL_HOST', false);

// Routes
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

// Local Storage Prefix
ffApp.config(['localStorageServiceProvider',
  function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('jayzhengff_');
  }]);
