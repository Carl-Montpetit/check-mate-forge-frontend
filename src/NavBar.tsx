import styles from "./NavBar.module.css";
import React from "react";
import Button from "./Button.tsx";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const handleClick = (e: React.MouseEvent) => {
    // Handle click logic here
    console.log(e.target);
  };

  return (
    <nav className={styles.nav}>
      <div className="nav-buttons">
        <Button esthetics="create-account" onClick={handleClick}>
          Create an account
        </Button>
        <Button esthetics="login" onClick={handleClick}>
          Log in
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
