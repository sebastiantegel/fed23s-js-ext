import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h1>About page</h1>
      <button onClick={handleClick}>Hem</button>
    </>
  );
};
