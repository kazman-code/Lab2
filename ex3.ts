interface myTasksInterface{//interface describes structure
    myTasks:string[];
    addTask(task:string):number;
    listAllItems():void;
    deleteTask(task:string):number;
    
    
}
class Tasks implements myTasksInterface{
constructor () {}

    myTasks :string[] =[];//makes empty array to store tasks
   
    
    addTask(task:string):number{//method to add task
    this.myTasks.push(task);//adds tasks
    console.log(task+" has been added to my Tasks List.")
    return this.myTasks.length;//returns total tasks
}

     listAllItems():void{//display all tasks method
    for(let i=0;i<this.myTasks.length;i++){
        console.log("Task: "+this.myTasks[i]+" is on my Tasks list.")
    }
}

    deleteTask(task:string):number{//method to delete tasks
    let index:number = this.myTasks.indexOf(task);
  

    if(index === -1){
        console.log(task+" is not in my Task list.")//this runs if task is not there
    }else{
          this.myTasks.splice(index,1);//deletes task
    }
    return this.myTasks.length; //returns tasks
}



}
let myTodo = new Tasks();//new object of tasks class
//adds tasks
myTodo.addTask("Eat");
myTodo.addTask("Sleep");
//lists tasks
myTodo.listAllItems();
//deletes stuff
myTodo.deleteTask("Stuff");
//deletes sleep
myTodo.deleteTask("Sleep");
//lists tasks
myTodo.listAllItems();
