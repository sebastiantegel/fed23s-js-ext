import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { Wrapper } from "../components/styled/Wrappers";
import { ViewMovie } from "../components/ViewMovie";

export const Movie = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);

  if (id) {
    const theMovie = products.find((p) => p.id === +id);
    if (theMovie)
      return (
        <Wrapper>
          <ViewMovie movie={theMovie}></ViewMovie>
        </Wrapper>
      );
    return <>Loading...</>;
  }

  return <></>;
};
