ffControllers.controller('RankingsCtrl', ['$scope', 'Rankings',
  function($scope, Rankings) {
    $scope.loadRankings = function(format) {
      $scope.format = format;
      $scope.rankings = Rankings[format];
    }

    // Initializations
    $scope.format = 'standard';
    $scope.predicate = 'rank';
    $scope.reverse = false;
    $scope.formats = Rankings.formats;

    $scope.loadRankings($scope.format);
  }]);
