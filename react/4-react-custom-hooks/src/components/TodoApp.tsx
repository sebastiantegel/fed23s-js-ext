import { useState } from "react";
import { useTodos } from "../hooks/useTodo";

export const TodoApp = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
  const [todoText, setTodoText] = useState("");

  return (
    <>
      <h3>My todos</h3>
      <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={() => addTodo(todoText)}>Spara</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
            <button onClick={() => toggleTodo(todo.id)}>Ändra</button>
          </li>
        ))}
      </ul>
    </>
  );
};
