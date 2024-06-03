import { useEffect, useState } from "react";
import "./App.css";
import { MovieApp } from "./components/MovieApp";

function App() {
  const [myDummyState, setMyDummyState] = useState(false);
  const [mySecondDummyState, setMySecondDummyState] = useState(false);

  useEffect(() => {
    console.log("My first use effect");
  }, [myDummyState]);

  useEffect(() => {
    console.log("My second use effect");
  });

  return (
    <>
      {/* <button onClick={() => setMyDummyState(!myDummyState)}>
        Ändra något
      </button>
      <button onClick={() => setMySecondDummyState(!mySecondDummyState)}>
        Ändra något annat
      </button> */}
      <MovieApp />
    </>
  );
}

export default App;

// https://omdbapi.com/?apikey=416ed51a&s=star
