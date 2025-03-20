import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo) => {
    this.todos.push({
      ...todo,
      completed: this.todos.length >= 2, // Ensure this updates correctly
    });
  };

  removeTodo = (index) => {
    this.todos.splice(index, 1);
  };

  get completedTodoCounts() {
    return this.todos.filter((todo) => todo.completed).length;
  }
}

const todoStore = new TodoStore();
export default todoStore;
