import "./App.css";
import { AddPerson } from "./components/AddPerson";
import { StateList } from "./components/StateList";
import { StateObject } from "./components/StateObject";

function App() {
  return (
    <>
      <AddPerson />
      <StateList />
      <StateObject />
    </>
  );
}

export default App;
