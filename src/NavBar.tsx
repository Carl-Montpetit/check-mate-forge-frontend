// import styles from "./NavBar.module.css";
import React from "react";
import Title from "./Title.tsx";
import Button from "./Button.tsx";

interface Props {
  title: string;
}

const NavBar: React.FC<Props> = ({ title }) => {
  const handleClick = () => {
    // Handle click logic here
    console.log("Button clicked!");
  };

  return (
    <nav>
      <Title text={title} />
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
