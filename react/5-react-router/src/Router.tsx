import { createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Todo } from "./pages/Todo";
import { Movies } from "./pages/Movies";
import { Movie } from "./pages/Movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/todo/:id",
        element: <Todo />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:movieid",
        element: <Movie />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
