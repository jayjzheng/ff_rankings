ffControllers.controller('RankingsCtrl', ['$scope', 'Rankings',
  function($scope, Rankings) {
    $scope.loadRankings = function(format) {
      $scope.rankings = Rankings[format];
    }

    // Initializations
    $scope.format = 'standard';
    $scope.predicate = 'rank';
    $scope.reverse = false;

    $scope.loadRankings($scope.format);
  }]);
