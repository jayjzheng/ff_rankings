ffServices.factory('DraftAid', function(){
  var grade;

  grade = function(diff){
    if (diff < -10) {
        return 'Too early...';
      } else if (diff >= -10 && diff < -4) {
        return 'Reached a little...';
      } else if (diff >= -4 && diff < 4) {
        return 'Solid Pick';
      } else if (diff >= 4 && diff < 10) {
        return 'Very Good!';
      } else if (diff >= 10) {
        return 'What a Steal!';
      }
  }

  return {
    grade: grade
  }

});
