import { FormEvent, useReducer, useState } from "react";
import { ActionType, TodoReducer } from "../reducers/TodoReducer";

export const TodoApp = () => {
  //const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(TodoReducer, []);

  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.ADDED,
      payload: userInput,
    });
  };

  const handleRemove = (id: number) => {
    dispatch({
      type: ActionType.REMOVED,
      payload: id.toString(),
    });
  };

  const toggleTodo = (id: number) => {
    dispatch({
      type: ActionType.TOGGLED,
      payload: id.toString(),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Spara</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "done" : ""}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>Ändra</button>
            <button onClick={() => handleRemove(todo.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </>
  );
};
