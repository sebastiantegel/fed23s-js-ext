import { useParams } from "react-router-dom";

export const Todo = () => {
  const { id } = useParams();

  return <h1>Todo: {id}</h1>;
};
