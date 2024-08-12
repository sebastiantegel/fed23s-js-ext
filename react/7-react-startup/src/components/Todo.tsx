import { useContext } from "react";
import { Todo } from "../models/Todo";
import { TodosContext } from "../contexts/TodosContext";

interface ITodoProps {
  todo: Todo;
}

export const TodoPresentation = ({ todo }: ITodoProps) => {
  const todos = useContext(TodosContext);

  console.log(todos);

  return (
    <>
      <li>{todo.text}</li>
    </>
  );
};
