"use strict";

/*

    provide the basic crud interactions with firebase
 
*/

app.factory("todoFactory", function($q, $http, FBCreds){

    const getAllTasks = function(){
        let tasks = [];
        console.log("url is", `${FBCreds.databaseURL}/items.json`);
        return $q( (resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/items.json`)
            .then((itemObject) => {
                let itemCollection = itemObject.data;
                console.log("itemCollection", itemCollection);
                Object.keys(itemCollection).forEach((key) => {
                    itemCollection[key].id = key;
                    tasks.push(itemCollection[key]);
                });
                resolve(tasks);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const addTask = function(){

    };

    const editTask = function(id, obj) {
        console.log("id and obj to update", id, obj);
        return $q((resolve, reject) => {
            let newObj = JSON.stringify(obj);
            $http.patch(`${FBCreds.databaseURL}/items/${id}.json`, newObj)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    const deleteTask = function(){

    };

    const getSingleTask = function(itemId){
        return $q((resolve, reject) =>{
            $http.get(`${FBCreds.databaseURL}/items/${itemId}.json`)
            .then((itemObj) => {
                resolve(itemObj.data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    return {getAllTasks, addTask, editTask, deleteTask, getSingleTask};
});