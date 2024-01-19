import React, { useEffect, useRef, useState } from "react";
import styles from "./ChessBoard.module.css";
import Tile from "../Tile/Tile.tsx";

const yAxis: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
const xAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const initialBoardState: Piece[] = [];

function initializePawns(initialBoardState: Piece[]): void {
  for (let i: number = 0; i < 8; i++) {
    initialBoardState.push({ image: "black-pawn.svg", x: i, y: 6 });
    initialBoardState.push({ image: "white-pawn.svg", x: i, y: 1 });
  }
}

function initializeRooks(initialBoardState: Piece[]): void {
  initialBoardState.push({ image: "black-rook.svg", x: 0, y: 7 });
  initialBoardState.push({ image: "black-rook.svg", x: 7, y: 7 });
  initialBoardState.push({ image: "white-rook.svg", x: 0, y: 0 });
  initialBoardState.push({ image: "white-rook.svg", x: 7, y: 0 });
}

function initializeKnights(initialBoardState: Piece[]): void {
  initialBoardState.push({ image: "black-knight.svg", x: 1, y: 7 });
  initialBoardState.push({ image: "black-knight.svg", x: 6, y: 7 });
  initialBoardState.push({ image: "white-knight.svg", x: 1, y: 0 });
  initialBoardState.push({ image: "white-knight.svg", x: 6, y: 0 });
}

function initializeBishops(initialBoardState: Piece[]): void {
  initialBoardState.push({ image: "black-bishop.svg", x: 2, y: 7 });
  initialBoardState.push({ image: "black-bishop.svg", x: 5, y: 7 });
  initialBoardState.push({ image: "white-bishop.svg", x: 2, y: 0 });
  initialBoardState.push({ image: "white-bishop.svg", x: 5, y: 0 });
}

function initializeQueens(initialBoardState: Piece[]): void {
  initialBoardState.push({ image: "black-queen.svg", x: 3, y: 7 });
  initialBoardState.push({ image: "white-queen.svg", x: 3, y: 0 });
}

function initializeKings(initialBoardState: Piece[]): void {
  initialBoardState.push({ image: "black-king.svg", x: 4, y: 7 });
  initialBoardState.push({ image: "white-king.svg", x: 4, y: 0 });
}

initializePawns(initialBoardState);
initializeRooks(initialBoardState);
initializeKnights(initialBoardState);
initializeBishops(initialBoardState);
initializeQueens(initialBoardState);
initializeKings(initialBoardState);

// x: column, y: row where x,y∈[0,7] from bottom-left -> top-right
function ChessBoard() {
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
  const chessBoardRef = useRef<HTMLDivElement>(null);

  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    const chessBoard = chessBoardRef.current;

    if (element.id.includes("piece") && chessBoard) {
      setGridX(Math.floor((e.clientX - chessBoard.offsetLeft) / 100));
      setGridY(
        Math.abs(Math.ceil((e.clientY - chessBoard.offsetTop - 800) / 100)),
      );

      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      setActivePiece(element);
    }
  }

  function dropPiece(e: React.MouseEvent) {
    const chessBoard = chessBoardRef.current;

    if (activePiece && chessBoard) {
      const x = Math.floor((e.clientX - chessBoard.offsetLeft) / 100);
      const y = Math.abs(
        Math.ceil((e.clientY - chessBoard.offsetTop - 800) / 100),
      );

      setPieces((value) => {
        const pieces = value.map((piece) => {
          if (piece.x === gridX && piece.y === gridY) {
            piece.x = x;
            piece.y = y;
          }

          return piece;
        });

        return pieces;
      });
      setActivePiece(null);
    }
  }

  function movePiece(e: React.MouseEvent) {
    const chessBoard = chessBoardRef.current;
    if (activePiece && chessBoard) {
      const maxX = chessBoard.offsetLeft + chessBoard.clientWidth - 75;
      const maxY = chessBoard.offsetTop + chessBoard.clientHeight - 75;
      const minX = chessBoard.offsetLeft - 25;
      const minY = chessBoard.offsetTop - 25;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";

      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  }
  // the array that will contain the board itself with all the tiles
  let board: React.ReactElement[] = [];

  for (let j: number = yAxis.length - 1; j >= 0; j--) {
    for (let i: number = 0; i < xAxis.length; i++) {
      let image: string | undefined = undefined;

      pieces.forEach((piece: Piece) => {
        if (piece.x === i && piece.y === j) {
          image = piece.image;
        }
      });

      board.push(<Tile key={yAxis[j] + xAxis[i]} image={image} x={i} y={j} />);
    }
  }

  return (
    <div className={styles.chessBoardContainer}>
      <div className={styles.chessBoardBorder}>
        <div
          onMouseDown={(e) => grabPiece(e)}
          onMouseUp={(e) => dropPiece(e)}
          onMouseMove={(e) => movePiece(e)}
          className={styles.chessBoard}
          ref={chessBoardRef}
        >
          {board}
        </div>
      </div>
    </div>
  );
}

export default ChessBoard;
