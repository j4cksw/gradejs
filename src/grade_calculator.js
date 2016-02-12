(function(){
    angular.module('GradeJS').service('GradeCalculator', GradeCalculator);

    function GradeCalculator(){

    }

    GradeCalculator.prototype.calculateScore = function(score){
        if( score < 50 ){
            return "F";
        }
        if( score < 60 ){
            return "D";
        }
        if( score < 70 ){
            return "C";
        }
        if( score < 80 ){
            return "B";
        }
        return "A";
    };
})();
