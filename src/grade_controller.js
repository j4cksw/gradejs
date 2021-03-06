(function(){
    angular.module('GradeJS').controller('GradeController', GradeController);

    GradeController.$inject = ['$scope', 'GradeCalculator'];

    function GradeController($scope, gradeCalculator){

        $scope.executeGrade = executeGrade;
        $scope.score = 0;

        function executeGrade(){
            $scope.result = gradeCalculator.calculateScore($scope.score);
        }
    }
})();
