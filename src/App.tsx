import "./app.module.css";
import Board from "./Board.tsx";
import NavBar from "./NavBar.tsx";

const App: React.FC = () => {
  return (
    <>
      <NavBar title="Welcome to Check Mate Forge"></NavBar>
      <Board />
    </>
  );
};

export default App;
