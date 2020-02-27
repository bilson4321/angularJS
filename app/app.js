angular.module("app",[    //list of module app is depended on
    'ngComponentRouter',
    'addTask',
    'editTask',
    'allList',
    'completed',
    'notCompleted'
])
.run(function($rootScope)
{
    $rootScope.taskList=[
        {
            id:1,
            name:"go to college",
            status:true,
            description:"go to college at 6:30"
        }
    ];
})
.value('$routerRootComponent','app')
.component('app',{
templateUrl:'app/app.html',
$routeConfig:[
    {path:'/addTask/',name:'AddTask',component:'addTaskComponent'},
    {path:'/allList/',name:'AllList',component:'allListComponent',useAsDefault: true},
    {path:'/completed/',name:'Completed',component:'completedComponent'},
    {path:'/notCompleted/',name:'NotCompleted',component:'notCompletedComponent'},
    {path:'/editTask/',name:'EditTask',component:'editTaskComponent'}
]
})