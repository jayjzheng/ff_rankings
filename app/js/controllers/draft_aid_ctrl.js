ffControllers.controller('DraftAidCtrl', ['$scope', '$routeParams', 'Rankings', 'DraftAid',
  function($scope, $routeParams, Rankings, DraftAid) {

    $scope.draft = function(player){
      $scope.drafted.push(player);
      player.drafted = $scope.drafted.length;
    }

    $scope.undraft = function(){
      player = $scope.drafted.pop();
      player.drafted = null;
    }

    $scope.isLastDrafted = function(player){
      return player === _.last($scope.drafted);
    }

    $scope.resetAll = function(){
      _.each($scope.rankings, function(ranking){ranking.drafted = null;} );
      $scope.drafted = [];
    }

    $scope.loadRankings = function(format) {
      $scope.rankings = Rankings[format];
      $scope.resetAll();
    }

    $scope.draftGrade = function(player){
      var diff = player.drafted - player.rank;
      return DraftAid.grade(diff);
    }

    $scope.positionFilter = function(position){
      if (position === null) {
        return {drafted: null};
      } else {
        return {drafted: null, position: position};
      }
    }

    $scope.positionText = function(position){
      var positionMappings = { null: 'Overall',
                               RB: 'Running Backs',
                               WR: 'Wide Receivers',
                               QB: 'Quarterbacks',
                               TE: 'Tightends'};

      return positionMappings[position];
    }

    // Initializations
    $scope.format = 'standard';
    $scope.loadRankings($scope.format);

    $scope.positions = ['RB', 'WR', 'QB', 'TE'];
  }]);
