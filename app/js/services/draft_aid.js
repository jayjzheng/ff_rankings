ffServices.factory('DraftAid', function(){
  var grade;

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

  return {
    grade: grade
  }

});
