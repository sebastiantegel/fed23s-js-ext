import { createContext, Dispatch } from "react";
import { IAction } from "./../reducers/ProductReducer";

export const ProductDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
