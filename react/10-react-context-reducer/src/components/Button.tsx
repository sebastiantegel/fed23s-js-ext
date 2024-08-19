import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface IButtonProps {
  children: JSX.Element;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: IButtonProps) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      {children}
    </button>
  );
};
