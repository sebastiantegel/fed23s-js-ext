import { Todo } from "../models/Todo";

interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
  REMOVED,
  TOGGLED,
}

export const TodoReducer = (todos: Todo[], action: IAction): Todo[] => {
  switch (action.type) {
    case ActionType.ADDED:
      return [...todos, new Todo(action.payload)];

    case ActionType.REMOVED:
      return todos.filter((todo) => todo.id !== +action.payload);

    case ActionType.TOGGLED:
      return todos.map((todo) => {
        if (todo.id === +action.payload) return { ...todo, done: !todo.done };
        return todo;
      });

    default:
      return todos;
  }

  //   if (action.type === ActionType.ADDED) {
  //     return [...todos, new Todo(action.payload)];
  //   }

  //   if (action.type === ActionType.REMOVED) {
  //     return todos.filter((todo) => todo.id !== +action.payload);
  //   }

  //   if (action.type === ActionType.TOGGLED) {
  //     return todos.map((todo) => {
  //       if (todo.id === +action.payload) return { ...todo, done: !todo.done };
  //       return todo;
  //     });
  //   }

  //   return todos;
};
