import { Link } from "react-router-dom";
import { IProduct } from "../models/IProduct";
import { MagicButton } from "./styled/Buttons";
import { P } from "./styled/P";
import { Title } from "./styled/Title";
import { MovieWrapper } from "./styled/Wrappers";
import { useContext } from "react";
import { ProductDispatchContext } from "../contexts/ProductDispatchContext";
import { ActionType } from "../reducers/ProductReducer";

interface IViewMovieProps {
  movie: IProduct;
}

export const ViewMovie = ({ movie }: IViewMovieProps) => {
  const dispatch = useContext(ProductDispatchContext);

  const handleSelected = () => {
    dispatch({ type: ActionType.SELECTED, payload: movie.id.toString() });
  };

  return (
    <MovieWrapper selected={movie.selected}>
      <Title>{movie.name}</Title>
      <P>{movie.price}</P>
      <MagicButton
        color="black"
        background="whitesmoke"
        onClick={handleSelected}
      >
        Välj
      </MagicButton>
      <Link to={`/movie/${movie.id}`}>Läs mer...</Link>
    </MovieWrapper>
  );
};
