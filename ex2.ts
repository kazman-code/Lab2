//Array of strings
let myTasks:string[] = [];

// Arrow function to add a new task to the array
// Takes a task (string) as a parameter
// Returns the updated number of tasks (number)
let addTask = (task:string):number=>{
    myTasks.push(task);
    console.log(task+" has been added to my Tasks List.")
    return myTasks.length;
}

function listAllItems():void{
    for(let i=0;i<myTasks.length;i++){
        console.log("Task: "+myTasks[i]+" is on my Tasks list.")
    }
}

function deleteTask(task:string):number{
    let index:number = myTasks.indexOf(task);
  

    if(index === -1){
        console.log(task+" is not in my Task list.")
    }else{
          myTasks.splice(index,1);
    }
    return myTasks.length; 
}


addTask("Work");
addTask("Eat");
listAllItems();
deleteTask("Work");
deleteTask("Stuff");
