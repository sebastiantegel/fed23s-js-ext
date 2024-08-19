import { Dispatch } from "react";
import { createContext } from "react";
import { Todo } from "../models/Todo";
import { IAction } from "../reducers/TodoReducer";

interface ITodosAllContext {
  todos: Todo[];
  dispatch: Dispatch<IAction>;
}

export const TodosAllContext = createContext<ITodosAllContext>({
  todos: [],
  dispatch: () => {
    return;
  },
});
