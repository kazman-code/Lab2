interface myTasksInterface{
    myTasks:string[];
    addTask(task:string):number;
    listAllItems():void;
    deleteTask(task:string):number;
    
    
}
class Tasks implements myTasksInterface{
constructor () {}

    myTasks :string[] =[];
   
    
    addTask(task:string):number{
    this.myTasks.push(task);
    console.log(task+" has been added to my Tasks List.")
    return this.myTasks.length;
}

     listAllItems():void{
    for(let i=0;i<this.myTasks.length;i++){
        console.log("Task: "+this.myTasks[i]+" is on my Tasks list.")
    }
}

    deleteTask(task:string):number{
    let index:number = this.myTasks.indexOf(task);
  

    if(index === -1){
        console.log(task+" is not in my Task list.")
    }else{
          this.myTasks.splice(index,1);
    }
    return this.myTasks.length; 
}



}
let myTodo = new Tasks();
myTodo.addTask("Eat");
myTodo.addTask("Sleep");
myTodo.listAllItems();
myTodo.deleteTask("Stuff");
myTodo.deleteTask("Sleep");
myTodo.listAllItems;
