import { createContext } from "react";
import { Todo } from "../models/Todo";

export interface ITodosContext {
  todos: Todo[];
  add: () => void;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  add: () => {},
});
