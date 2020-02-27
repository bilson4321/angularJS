angular.module('allList',[])
.component('allListComponent',
{
    templateUrl:"app/allList/allList.html"
})
.controller('allListController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.tasks=$rootScope.taskList;
}]);