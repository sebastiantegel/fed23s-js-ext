import { useContext } from "react";
import { TodoPresentation } from "./Todo";
import { TodosContext } from "../contexts/TodosContext";

export const Todos = () => {
  const { todos } = useContext(TodosContext);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoPresentation key={todo.id} todo={todo}></TodoPresentation>
        ))}
      </ul>
    </>
  );
};
