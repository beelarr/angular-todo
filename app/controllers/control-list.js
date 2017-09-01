"use strict";

/*

    handle data and functionality needed in list.html
    using todoFactory and userFactory to interact with the database

 */

app.controller("listCtrl", function($scope, todoFactory, userFactory){

    $scope.tasks = [];

    const showAllTasks = function(){
    	todoFactory.getAllTasks()
    	.then((tasks) => {
    		console.log("showAllTasks from promise", tasks);
    		$scope.tasks =  tasks;
    	});
    };

    
    const deleteTask = function(){

    };

    //TODO fix this toggle happens too quick
    $scope.toggleDoneTask = function(obj){
    	console.log("toggleDoneTask", obj);
    	let status = obj.isCompleted ? true : false; 
    	let tmpObj = {isCompleted:status};
    	todoFactory.editTask(obj.id, tmpObj)
    	.then( () => {
    		console.log("then is updated");
    		showAllTasks();
    	});
    };

    showAllTasks();

});