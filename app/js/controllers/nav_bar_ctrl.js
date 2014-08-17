ffControllers.controller('NavBarCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.getClass = function(path) {
      if ($location.path().substr(0, path.length) == path) {
        return "active";
      } else {
        return "";
      }
    }
  }]);