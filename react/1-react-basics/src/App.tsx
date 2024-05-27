import "./App.css";
import { ConditionalRender } from "./components/conditionals/ConditionalRender";
import { Events } from "./components/Events";
import { Hooks } from "./components/hooks";
// import { Button } from "./components/Button";
import { Interpolation } from "./components/Interpolation";
import { Loops } from "./components/Loops";

function App() {
  // const message = "Hello world";

  return (
    <>
      {/* <h1>{message}</h1>
      <Button /> */}
      <Interpolation />
      <ConditionalRender />
      <Loops />
      <Events />
      <Hooks />
    </>
  );
}

export default App;
