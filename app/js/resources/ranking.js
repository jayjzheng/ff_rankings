ffResources.factory('Ranking', ['$resource', '$http', 'REMOTE_HOST', 'LOCAL_HOST',
  function($resource, $http, REMOTE_HOST, LOCAL_HOST) {
    var resource;

    resource = {};

    resource.index = function(format, week) {
      return $http.get(LOCAL_HOST + 'ranking_collections.json', {params: {rc_format: format, week: week}});
    }

    return resource;
  }]);
