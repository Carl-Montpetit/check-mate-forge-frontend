import React from "react";
import "./app.css";
import Board from "./Board.tsx";
import NavBar from "./NavBar.tsx";

const App: React.FC = () => {
  return (
    <div>
      <NavBar title="Welcome to Check Mate Forge" button />
      <Board />
    </div>
  );
};

export default App;
