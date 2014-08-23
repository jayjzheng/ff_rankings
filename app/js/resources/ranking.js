ffResources.factory('Ranking', ['$resource', '$http',
  function($resource, $http) {
    var resource, base_url;

    resource = {};
    base_url = 'http://ff-rankings.herokuapp.com/';
    // base_url = 'http://localhost:3000/';

    resource.index = function(format, week) {
      return $http.get(base_url + 'ranking_collections.json', {params: {rc_format: format, week: week}});
    }

    return resource;
  }]);
