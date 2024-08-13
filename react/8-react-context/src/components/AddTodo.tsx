import { useContext, useState } from "react";
import { Button } from "./Button";
import { TodosContext } from "../contexts/TodosContext";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const { add } = useContext(TodosContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        add(userInput);
        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button click={() => {}}>
        <>Spara</>
      </Button>
    </form>
  );
};
