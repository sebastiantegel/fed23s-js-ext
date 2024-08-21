import styled from "styled-components";

interface IButtonProps {
  background: string;
  color: string;
  hoverColor?: string;
}

export const Button = styled.button`
  padding: 1rem;
  background-color: white;
  color: black;
`;

export const MagicButton = styled(Button)<IButtonProps>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};

  &:hover {
    color: ${(props) => props.hoverColor || "black"};
  }
`;
