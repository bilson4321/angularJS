angular.module('addTask',[])
.component('addTaskComponent',
{
    templateUrl:'app/addTask/addTask.html'
})
.controller('addTaskController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.task={};
    $scope.taskList=[];
    $scope.addTask=function(task)
    {
        task.id=$rootScope.taskList.length+1;
        $rootScope.taskList.push(task);
        $scope.task={};
        $scope.taskList=$rootScope.taskList;
    }
}]);