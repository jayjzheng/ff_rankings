ffControllers.controller('DraftAidCtrl', ['$rootScope', '$scope', '$routeParams', 'Ranking', 'Rankings', 'DraftAid', 'localStorageService',
  function($rootScope, $scope, $routeParams, Ranking, Rankings, DraftAid, localStorageService) {

    $scope.draft = function(player){
      $scope.search.name = '';

      $scope.drafted.push(player);
      player.drafted = $scope.drafted.length;

      localStorageService.set('drafted_' + $scope.format, $scope.drafted);
    }

    $scope.undraft = function(){
      player = $scope.drafted.pop();

      var found = _.find($scope.rankings, function(p){ return p.name === player.name; });
      found.drafted = null;

      localStorageService.set('drafted_' + $scope.format, $scope.drafted);
    }

    $scope.restart = function(){
      $scope.drafted = [];
      DraftAid.populateDrafted($scope.rankings, $scope.drafted);

      localStorageService.remove('drafted_' + $scope.format);
    }

    $scope.loadRankings = function(format, week) {
      $scope.loading = true;
      $scope.format = format;

      Ranking.index(format, week || 0).
        success(function(data, status, headers, config){
          $scope.rankings = data.rankings;
          $rootScope.updatedAt = data.updated_at;

          $scope.drafted = localStorageService.get('drafted_' + format) || [];
          DraftAid.populateDrafted($scope.rankings, $scope.drafted);

          $scope.loading = false;
        }).
        error(function(data, status, headers, config){
          //handle errors;
          $scope.loading = false;
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
      var positionMappings = { RB: 'Running Backs',
                               WR: 'Wide Receivers',
                               QB: 'Quarterbacks',
                               TE: 'Tightends'};

      return positionMappings[position];
    }

    // Initializations
    $scope.formats = Rankings.formats;
    $scope.positions = Rankings.positions;

    $scope.format = 'standard';
    $scope.loadRankings($scope.format);
    $scope.search = {};
  }]);
