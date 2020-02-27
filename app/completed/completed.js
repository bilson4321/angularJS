angular.module('completed',[])
.component('completedComponent',
{
    templateUrl:"app/completed/completed.html"

})
.controller('completedController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.tasks=$rootScope.taskList.filter( 
    element=>element.status===true
    );
}]);