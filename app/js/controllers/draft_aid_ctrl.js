ffControllers.controller('DraftAidCtrl', ['$scope', '$routeParams', 'Rankings', 'DraftAid', 'localStorageService',
  function($scope, $routeParams, Rankings, DraftAid, localStorageService) {

    $scope.draft = function(player){
      $scope.drafted.push(player);
      player.drafted = $scope.drafted.length;

      localStorageService.set('drafted_' + $scope.format, $scope.drafted);
    }

    $scope.undraft = function(){
      player = $scope.drafted.pop();
      player.drafted = null;

      localStorageService.set('drafted_' + $scope.format, $scope.drafted);
    }

    $scope.isLastDrafted = function(player){
      return player === _.last($scope.drafted);
    }

    $scope.restart = function(){
      $scope.drafted = [];
      DraftAid.populateDrafted($scope.rankings, $scope.drafted);

      localStorageService.remove('drafted_' + $scope.format);
    }

    $scope.loadRankings = function(format) {
      $scope.rankings = Rankings[format];
      $scope.format = format;

      $scope.drafted = localStorageService.get('drafted_' + format) || [];
      DraftAid.populateDrafted($scope.rankings, $scope.drafted);
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
      var positionMappings = { RB: 'Running Backs',
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
