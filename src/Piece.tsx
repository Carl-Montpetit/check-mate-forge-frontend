import "./Piece.css";

interface PieceProps {
  type: string;
  isDark: boolean;
  row: number;
  column: string;
}

function Piece({ type, isDark, row, column }: PieceProps) {
  const getIcon = (type: string, isDark: boolean) => {
    let icon: string = "";

    if (isDark) {
      if (type === "rook") {
        icon = "black-rook.svg";
      } else if (type === "knight") icon = "black-knight.svg";
      else if (type === "bishop") icon = "black-bishop.svg";
      else if (type === "queen") icon = "dark-queen.svg";
      else if (type === "king") icon = "black-king.svg";
      else if (type === "pawn") icon = "black-pawn.svg";
    } else {
      if (type === "rook") {
        icon = "white-rook.svg";
      } else if (type === "knight") icon = "white-knight.svg";
      else if (type === "bishop") icon = "white-bishop.svg";
      else if (type === "queen") icon = "white-queen.svg";
      else if (type === "king") icon = "white-king.svg";
      else if (type === "pawn") icon = "white-pawn.svg";
    }

    return icon;
  };

  return (
    <>
      <img
        id={`${isDark ? "black" : "white"}-${type}-${row}-${column}`}
        className="piece"
        src={getIcon(type, isDark)}
        alt={type}
      />
    </>
  );
}

export default Piece;
