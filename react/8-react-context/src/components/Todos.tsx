import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { Button } from "./Button";

export const Todos = () => {
  const { todos, toggle, remove } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li className={todo.done ? "done" : ""} key={todo.id}>
          <span onClick={() => toggle(todo.id)}>{todo.text}</span>
          <Button click={() => remove(todo.id)}>
            <>Ta bort</>
          </Button>
        </li>
      ))}
    </ul>
  );
};
