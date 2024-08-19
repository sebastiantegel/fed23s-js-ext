import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../components/Button";
import { useState } from "react";
import { ITheme, ThemeContext, themes } from "../contexts/ThemeContext";

export const Layout = () => {
  const [theme, setTheme] = useState<ITheme>(themes.light);

  const toggleTheme = () => {
    setTheme(theme.name === themes.dark.name ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/todos"}>Todos</NavLink>
            </li>
          </ul>
        </nav>

        <Button onClick={toggleTheme}>
          <>Byt tema</>
        </Button>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </ThemeContext.Provider>
  );
};
