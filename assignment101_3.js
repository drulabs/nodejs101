function TodoList() {
  this.tasks = new Array();
  this.id = 1
}

TodoList.prototype.add = function(item) {
  this.tasks.push({
    id: this.id,
    description: item,
    completed: false,
    complete: function(){
      this.completed = true
    }
  });
  this.id += 1
}

TodoList.prototype.list = function(){
  for(i = 0; i < this.tasks.length; i++) {
    var task = this.tasks[i]
    console.log("Task {id:" + task.id + ", description: " + task.description
    + ", completed: " + task.completed);
  }
}

TodoList.prototype.remove = function(taskToBeRemoved){
  var removeIndex = this.tasks.indexOf(taskToBeRemoved);

  if (removeIndex >= 0) {
    this.tasks.splice(removeIndex, 1)
  }
}

var groceryList = new TodoList();
groceryList.add("Bread");
groceryList.add("Milk");
groceryList.add("Eggs");
groceryList.add("Mayo");
groceryList.add("Juice");
groceryList.add("Ketchup");

groceryList.list();

var eggsTask = groceryList.tasks[2];
eggsTask.complete()
console.log("###### printing eggs task");
console.log(eggsTask);

var milkTask = groceryList.tasks[1];
var mayoTask = groceryList.tasks[3];

groceryList.remove(milkTask)
groceryList.remove(mayoTask)

console.log("###### tasks left ######");
groceryList.list()
