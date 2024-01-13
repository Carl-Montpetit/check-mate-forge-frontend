import React from "react";
import "./app.css";
import Title from "./Title.tsx";
import Board from "./Board.tsx";
import Button from "./Button.tsx";

const App: React.FC = () => {
  const handleClick = () => {
    alert("¡Click me");
  };

  return (
    <div>
      <Title text="Welcome to Check Mate Forge" />
      <Button onClick={handleClick}>Create an account</Button>
      <Button onClick={handleClick}>Log in</Button>
      <Board />
    </div>
  );
};

export default App;
