import { useState } from "react";
import TodoList from "./TodoList";
import todoStore from "../../store/TodoStore";

function Todo() {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    todoStore.addTodo({
      text: newTodo,
    });
    setNewTodo("");
  };
  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList />
    </div>
  );
}

export default Todo;
