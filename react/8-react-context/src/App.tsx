import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { ITheme, ThemeContext, themes } from "./contexts/ThemeContext";
import { TodoApp } from "./components/TodoApp";

function App() {
  const [theme, setTheme] = useState<ITheme>(themes.light);

  const toggleTheme = () => {
    if (theme.name === "Night") {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div>
          <Button click={toggleTheme}>
            <>Byt till: {theme.name === "Night" ? "Day" : "Night"}</>
          </Button>
        </div>

        <TodoApp />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
