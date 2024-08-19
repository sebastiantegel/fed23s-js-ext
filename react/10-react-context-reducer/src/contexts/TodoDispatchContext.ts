import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/TodoReducer";

export const TodoDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
