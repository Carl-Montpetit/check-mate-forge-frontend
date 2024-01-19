import styles from "./App.module.css";
import ChessBoard from "../ChessBoard/ChessBoard.tsx";
import Title from "../Title/Title.tsx";

export default function App() {
  return (
    <>
      <Title text="Welcome to Check Mate Forge" />
      <ChessBoard />
    </>
  );
}
