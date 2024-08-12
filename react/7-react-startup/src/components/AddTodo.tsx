import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const AddTodo = () => {
  const { add } = useContext(TodosContext);
  return (
    <>
      <button onClick={add}>Lägg till</button>
    </>
  );
};
