ffControllers.controller('DraftAidCtrl', ['$scope', '$routeParams', 'Rankings', 'DraftAid', 'localStorageService',
  function($scope, $routeParams, Rankings, DraftAid, localStorageService) {

    $scope.draft = function(player){
      var key;

      $scope.drafted.push(player);
      player.drafted = $scope.drafted.length;

      key = 'drafted_' + $scope.format;
      localStorageService.set(key, $scope.drafted);
    }

    $scope.undraft = function(){
      var key;

      player = $scope.drafted.pop();
      player.drafted = null;

      key = 'drafted_' + $scope.format;
      localStorageService.set(key, $scope.drafted);
    }

    $scope.isLastDrafted = function(player){
      return player === _.last($scope.drafted);
    }

    $scope.restart = function(){
      var key;

      $scope.drafted = [];
      $scope.populateDrafted($scope.rankings, $scope.drafted);

      key = 'drafted_' + $scope.format;
      localStorageService.remove(key);
    }

    $scope.loadRankings = function(format) {
      $scope.rankings = Rankings[format];
      $scope.format = format;

      key = 'drafted_' + format;

      $scope.drafted = localStorageService.get(key) || [];
      $scope.populateDrafted($scope.rankings, $scope.drafted);
    }

    $scope.populateDrafted = function(rankings, drafted) {
      _.each($scope.rankings, function(player){
        var drafted_player = _.find(drafted, function(p){ return p.name === player.name; });
        if (drafted_player) {
          player.drafted = drafted_player.drafted;
        } else {
          player.drafted = null;
        }
      });
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
