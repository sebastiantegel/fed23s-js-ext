import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface IButtonProps {
  children: JSX.Element;
  click: () => void;
}

export const Button = ({ children, click }: IButtonProps) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.foregroundColor,
      }}
      onClick={click}
    >
      {children}
    </button>
  );
};
