ffServices.factory('DraftAid', function(){
  var grade, populateDrafted;

  grade = function(diff){
    if (diff < -10) {
        return 'F';
      } else if (diff >= -10 && diff < -4) {
        return 'D';
      } else if (diff >= -4 && diff < 4) {
        return 'C';
      } else if (diff >= 4 && diff < 10) {
        return 'B';
      } else if (diff >= 10) {
        return 'A';
      }
  }

  populateDrafted = function(rankings, drafted){
    _.each(rankings, function(player){
      var drafted_player = _.find(drafted, function(p){ return p.name === player.name; });
      if (drafted_player) {
        player.drafted = drafted_player.drafted;
      } else {
        player.drafted = null;
      }
    });
  }

  return {
    grade: grade,
    populateDrafted: populateDrafted
  }

});
