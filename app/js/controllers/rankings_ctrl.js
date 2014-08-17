ffControllers.controller('RankingsCtrl', ['$scope', 'Rankings',
  function($scope, Rankings) {
    $scope.rankings = Rankings.standard;
    $scope.predicate = 'rank';
    $scope.reverse = false;
  }]);
