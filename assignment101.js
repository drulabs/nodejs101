class TodoList {

  //var myTasks = null;

  constructor(){
      console.log("function called");
      this.myTasks = new Array()
  }

  add(task1) {
    this.myTasks[this.myTasks.length] = task1;
    console.log("task: " + task1);
  }

}

var tt = new TodoList()
 tt.add("0")
 tt.add("1")
 tt.add("2")
 tt.add("3")
 tt.add("4")
