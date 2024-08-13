import { useState } from "react";
import { ITodosContext, TodosContext } from "../contexts/TodosContext";
import { Todo } from "../models/Todo";
import { Todos } from "./Todos";
import { AddTodo } from "./AddTodo";

export const TodoApp = () => {
  const [todos, setTodos] = useState<ITodosContext>({
    todos: [],
    add: () => {},
    toggle: () => {},
    remove: () => {},
  });

  todos.add = (text: string) => {
    setTodos({ ...todos, todos: [...todos.todos, new Todo(text)] });
  };

  todos.toggle = (id: number) => {
    const updatedTodos = todos.todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      else {
        return todo;
      }
    });

    setTodos({ ...todos, todos: updatedTodos });
  };

  todos.remove = (id: number) => {
    setTodos({ ...todos, todos: todos.todos.filter((todo) => todo.id !== id) });
  };

  return (
    <>
      <TodosContext.Provider value={todos}>
        <AddTodo />
        <Todos />
      </TodosContext.Provider>
    </>
  );
};
