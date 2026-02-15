//Array of strings
let myTasks:string[] = [];


// add a new task to the array
let addTask = (task:string):number=>{
    myTasks.push(task);  //adds new task to myTasks array
    console.log(task+" has been added to my Tasks List.")//displays task list
    return myTasks.length;//returns all tasks in array
}

//lists all tasks in the array
function listAllItems():void{
    for(let i=0;i<myTasks.length;i++){//loops thru array
        console.log("Task: "+myTasks[i]+" is on my Tasks list.")//prints out tasks
    }
}

//deletes tasks from array
function deleteTask(task:string):number{
    let index:number = myTasks.indexOf(task);//finds position of task
  

    if(index === -1){
        console.log(task+" is not in my Task list.")
    }else{
          myTasks.splice(index,1);//splice is used to delete task
    }
    return myTasks.length; 
}


addTask("Work");
addTask("Eat");
listAllItems();
deleteTask("Work");
deleteTask("Stuff");
