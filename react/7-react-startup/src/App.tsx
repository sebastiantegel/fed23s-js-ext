import { useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";
import { ITodosContext, TodosContext } from "./contexts/TodosContext";
import { Todo } from "./models/Todo";
import { AddTodo } from "./components/AddTodo";

function App() {
  const [data, setData] = useState<ITodosContext>({
    todos: [{ id: 1, text: "TET B", done: false }],
    add: () => {},
  });

  data.add = () => {
    setData({
      ...data,
      todos: [...data.todos, new Todo(Date.now(), "Hårdkodat test", false)],
    });
  };

  return (
    <>
      <TodosContext.Provider value={data}>
        <AddTodo></AddTodo>
        <Todos></Todos>
      </TodosContext.Provider>
    </>
  );
}

export default App;
