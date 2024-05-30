import { Todo } from "../../models/Todo";

interface ITodoProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoPresention = ({
  todo,
  toggleTodo,
  removeTodo,
}: ITodoProps) => {
  return (
    <div>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      <button onClick={() => toggleTodo(todo.id)}>Ändra</button>
      <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
    </div>
  );
};
