import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Wrapper } from "../components/styled/Wrappers";
import { ViewMovie } from "../components/ViewMovie";

export const Movies = () => {
  const products = useContext(ProductContext);

  return (
    <Wrapper>
      {products.map((product) => (
        <ViewMovie movie={product} key={product.id}></ViewMovie>
      ))}
    </Wrapper>
  );
};
