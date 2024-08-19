import { useReducer } from "react";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { TodoReducer } from "../reducers/TodoReducer";
import { TodosContext } from "../contexts/TodosContext";
import { TodoDispatchContext } from "../contexts/TodoDispatchContext";
import { TodosAllContext } from "../contexts/TodosAllContext";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    // <TodoDispatchContext.Provider value={dispatch}>
    //   <AddTodo />
    //   <TodosContext.Provider value={todos}>
    //     <Todos />
    //   </TodosContext.Provider>
    // </TodoDispatchContext.Provider>

    <TodosAllContext.Provider value={{ todos, dispatch }}>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </TodosAllContext.Provider>
  );
};
