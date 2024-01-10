import "./Cell.css";

interface Props {
  isDark: boolean;
  row: number;
  column: string;
}

function Cell({
  isDark,
  row,
  column,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <td
      id={`${isDark ? "black" : "white"}-cell-${row}-${column}`}
      style={{ backgroundColor: isDark ? "#8B4513" : "#D2B48C" }}
    >
      {children}
    </td>
  );
}

export default Cell;
