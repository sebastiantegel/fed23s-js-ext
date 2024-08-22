import "./App.css";
import { myFunction } from "./services/MyService";

function App() {
  const handleClick = () => {
    console.log("Testing");

    const myListWithNames = myFunction("Sebastian");

    console.log(myListWithNames);
  };

  return (
    <>
      <button onClick={handleClick}>Klicki</button>
    </>
  );
}

export default App;
