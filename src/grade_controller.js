(function(){
    angular.module('GradeJS').controller('GradeController', GradeController);

    function GradeController($scope){

        $scope.executeGrade = executeGrade;

        function executeGrade(){
            $scope.result = "A";
        }
    }
})();
