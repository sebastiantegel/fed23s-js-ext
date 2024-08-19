import { FormEvent, useContext, useState } from "react";
import { TodoDispatchContext } from "../contexts/TodoDispatchContext";
import { ActionType } from "../reducers/TodoReducer";
import { Button } from "./Button";
import { TodosAllContext } from "../contexts/TodosAllContext";

export const AddTodo = () => {
  // const dispatch = useContext(TodoDispatchContext);
  const { dispatch } = useContext(TodosAllContext);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.ADDED,
      payload: userInput,
    });

    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button>
        <>Spara</>
      </Button>
    </form>
  );
};
