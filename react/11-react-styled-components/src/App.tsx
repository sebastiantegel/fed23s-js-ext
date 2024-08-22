import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { ProductContext } from "./contexts/ProductContext";
import { useEffect, useReducer } from "react";
import { getMovies } from "./services/movieService";
import { ActionType, ProductReducer } from "./reducers/ProductReducer";
import { ProductDispatchContext } from "./contexts/ProductDispatchContext";

function App() {
  const [products, dispatch] = useReducer(ProductReducer, []);
  useEffect(() => {
    if (products.length > 0) return;

    const getData = async () => {
      const movies = await getMovies();
      dispatch({
        type: ActionType.LOADED,
        payload: JSON.stringify(movies),
      });
    };

    getData();
  });

  return (
    <>
      <ProductContext.Provider value={products}>
        <ProductDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router}></RouterProvider>
        </ProductDispatchContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

export default App;
