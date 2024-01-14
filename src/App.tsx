import "./app.module.css";
import Board from "./Board.tsx";
import NavBar from "./NavBar.tsx";
import Title from "./Title.tsx"

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Title text="Welcome to Check Mate Forge" />
      <Board />
    </>
  );
};

export default App;
