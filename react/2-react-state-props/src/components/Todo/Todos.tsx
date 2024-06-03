import { Todo } from "../../models/Todo";
import { TodoPresention } from "./Todo";

interface ITodosProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const Todos = ({ todos, toggleTodo, deleteTodo }: ITodosProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoPresention
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={deleteTodo}
        />
      ))}
    </div>
  );
};
