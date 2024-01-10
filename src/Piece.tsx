import "./Piece.css";

interface Props {
  type: string;
  isDark: boolean;
  row: number;
  column: string;
}

function Piece({ type, isDark, row, column }: Props) {
  const getIcon = (type: string, isDark: boolean) => {
    const colorPrefix = isDark ? "black-" : "white-";

    const iconMap: { [key: string]: string } = {
      rook: `${colorPrefix}rook.svg`,
      knight: `${colorPrefix}knight.svg`,
      bishop: `${colorPrefix}bishop.svg`,
      queen: `${colorPrefix}queen.svg`,
      king: `${colorPrefix}king.svg`,
      pawn: `${colorPrefix}pawn.svg`,
    };

    const icon = iconMap[type];

    if (!icon) {
      console.error("Wrong input for getIcon function!");
      throw new Error("Wrong input for getIcon function!");
    }

    return icon;
  };

  return (
    <img
      // id will be dependent on the initial position
      id={`${isDark ? "black" : "white"}-${type}-${row}-${column}`}
      className="piece"
      src={getIcon(type, isDark)}
      alt={type}
    />
  );
}

export default Piece;
