
var todo = [];

//Functionality Number 1.
function add_todo_item(new_item) {
    todo.push(new_item);
}

//Functionality Number 2.
function show_list() {
    for(var i = 0; i < todo.length; i = i + 1) {
        console.log(todo[i]);
    }
}
// edit the Todo List
function edit_todo(new_item , newTodoText) {
todo[new_item].todoText = newTodoText;

}

// delete Todo List
function delete_item(new_item) {
todo.splice(new_item, 1);

}
