(function(){
    angular.module('GradeJS').controller('GradeController', GradeController);

    function GradeController($scope){
        //$scope.result = "A";

        $scope.executeGrade = executeGrade;

        function executeGrade(){
            $scope.result = "A";
        }
    }
})();
