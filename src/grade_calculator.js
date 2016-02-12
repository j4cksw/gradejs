(function(){
    angular.module('GradeJS').service('GradeCalculator', GradeCalculator);

    function GradeCalculator(){

    }

    GradeCalculator.prototype.calculateScore = function(score){
        return "A";
    };
})();
