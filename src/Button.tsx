import React, { ReactNode, ButtonHTMLAttributes } from "react";
import "./Button.css";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
}
const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button id="account-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
