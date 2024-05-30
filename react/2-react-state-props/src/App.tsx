import "./App.css";
import { AddPerson } from "./components/AddPerson";
import { StateList } from "./components/StateList";
import { StateObject } from "./components/StateObject";
import { TodoApp } from "./components/Todo/TodoApp";

function App() {
  return (
    <>
      <TodoApp />
      {/* <AddPerson />
      <StateList />
      <StateObject /> */}
    </>
  );
}

export default App;
