import styled from "styled-components";

interface IMovieWrapper {
  selected: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 50px);
  justify-content: center;
  gap: 0.5rem;
`;

export const MovieWrapper = styled(Wrapper)<IMovieWrapper>`
  border: 2px solid grey;
  flex-direction: column;
  width: 30%;

  background-color: ${(props) => (props.selected ? "red" : "transparent")};
`;
