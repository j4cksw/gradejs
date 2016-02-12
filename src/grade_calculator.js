(function(){
    angular.module('GradeJS').service('GradeCalculator', GradeCalculator);

    function GradeCalculator(){

    }

    GradeCalculator.prototype.calculateScore = function(score){
        if( score < 80 ){
            return "B";
        }
        return "A";
    };
})();
