import { createBrowserRouter } from "react-router-dom";
import { Weather } from "./pages/Weather";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/weather",
        element: <Weather></Weather>,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);
