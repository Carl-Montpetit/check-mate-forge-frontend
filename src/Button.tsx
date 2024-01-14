import styles from "./Button.module.css";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  esthetics: string;
  onClick: (e: React.MouseEvent) => void;
}
const Button: React.FC<PropsWithChildren<Props>> = ({
  esthetics,
  onClick,
  children,
}: PropsWithChildren<Props>) => {
  if (esthetics === "login") {
    esthetics = styles.login;
  } else if (esthetics === "create-account") {
    esthetics = styles.createAccount;
  }

  return (
    <button className={esthetics} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
