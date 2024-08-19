import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { TodoDispatchContext } from "../contexts/TodoDispatchContext";
import { ActionType } from "../reducers/TodoReducer";
import { Button } from "./Button";
import { TodosAllContext } from "../contexts/TodosAllContext";

export const Todos = () => {
  // const todos = useContext(TodosContext);
  // const dispatch = useContext(TodoDispatchContext);

  const { todos, dispatch } = useContext(TodosAllContext);
  const removeTodo = (id: number) => {
    dispatch({
      type: ActionType.REMOVED,
      payload: id.toString(),
    });
  };

  const toggleTodo = (id: number) => {
    dispatch({
      type: ActionType.TOGGLED,
      payload: id.toString(),
    });
  };

  return (
    <>
      <section className="todos">
        {todos.map((todo) => (
          <div className={todo.done ? "todo done" : "todo"} key={todo.id}>
            <span>{todo.text}</span>
            <Button onClick={() => toggleTodo(todo.id)}>
              <>Ändra</>
            </Button>
            <Button onClick={() => removeTodo(todo.id)}>
              <>Ta bort</>
            </Button>
          </div>
        ))}
      </section>
    </>
  );
};
