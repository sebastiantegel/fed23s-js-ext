import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0);
    };
    to {
        transform: rotate(360deg);
    };
`;

export const Input = styled.input.attrs(() => ({
  type: "text",
}))`
  margin: 0;
  padding: 1.5rem;
  border-radius: 15px;
`;

export const PasswordInput = styled(Input).attrs(() => ({
  type: "password",
}))`
  border-color: red;
  animation: ${rotate} 1s linear infinite;
`;
