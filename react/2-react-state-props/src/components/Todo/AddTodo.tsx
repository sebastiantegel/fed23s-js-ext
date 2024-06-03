import { FormEvent, useState } from "react";

interface IAddTodoProps {
  addTodo: (text: string) => void;
}

export const AddTodo = (props: IAddTodoProps) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    props.addTodo(userInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Spara</button>
      </form>
    </>
  );
};
