import { Todo } from "../models/Todo";

export const Loops = () => {
  const numbers: number[] = [1, 1, 2, 3, 5];
  const todos: Todo[] = [new Todo("react"), new Todo("vue"), new Todo("lia")];

  const lis: JSX.Element[] = [];

  for (let i = 0; i < numbers.length; i++) {
    lis.push(<li key={i}>{numbers[i]}</li>);
  }

  const handleClick = (todo: Todo) => {
    console.log(todo);
  };

  return (
    <>
      <h3>Loops</h3>
      <ul>{lis}</ul>
      <div>
        {todos.map((todo) => {
          return (
            <div className="todo" key={todo.id}>
              <span className={todo.done ? "done" : ""}>{todo.text}</span>
              <button
                onClick={() => {
                  handleClick(todo);
                }}
              >
                Ändra
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
