var myTasks = [];
var addTask = function (task) {
    myTasks.push(task);
    console.log(task + " has been added to my Tasks List.");
    return myTasks.length;
};
function listAllItems() {
    for (var i = 0; i < myTasks.length; i++) {
        console.log("Task: " + myTasks[i] + " is on my Tasks list.");
    }
}
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    myTasks.splice(index, 1);
}
addTask("Work");
addTask("Eat");
listAllItems();
