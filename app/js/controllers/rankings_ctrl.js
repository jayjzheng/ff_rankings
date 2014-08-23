ffControllers.controller('RankingsCtrl', ['$scope', 'Ranking', 'Rankings',
  function($scope, Ranking, Rankings) {

    $scope.loadRankings = function(format, week) {
      $scope.loading = true;
      $scope.format = format;
      Ranking.index(format, week || 0).
        success(function(data, status, headers, config){
          $scope.rankings = data;
          $scope.loading = false;
        }).
        error(function(data, status, headers, config){
          $scope.loading = false;
        });
    }

    // Initializations
    $scope.format = 'standard';
    $scope.predicate = 'rank';
    $scope.reverse = false;
    $scope.formats = Rankings.formats;

    $scope.loadRankings($scope.format);
  }]);
