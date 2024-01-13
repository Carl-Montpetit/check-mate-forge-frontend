import "./Board.css";
import Cell from "./Cell.tsx";
import Piece from "./Piece.tsx";

function Board() {
  return (
    <div id="chess-board-container">
      <div id="chess-board-border">
        <table id="chess-board-table">
          <tbody>
            <tr id="row-8">
              <Cell isDark={false} row={8} column="A">
                <Piece type="rook" isDark={true} row={8} column="A" />
              </Cell>
              <Cell isDark={true} row={8} column="B">
                <Piece type="knight" isDark={true} row={8} column="B" />
              </Cell>
              <Cell isDark={false} row={8} column="C">
                <Piece type="bishop" isDark={true} row={8} column="C" />
              </Cell>
              <Cell isDark={true} row={8} column="D">
                <Piece type="queen" isDark={true} row={8} column="D" />
              </Cell>
              <Cell isDark={false} row={8} column="E">
                <Piece type="king" isDark={true} row={8} column="E" />
              </Cell>
              <Cell isDark={true} row={8} column="F">
                <Piece type="bishop" isDark={true} row={8} column="F" />
              </Cell>
              <Cell isDark={false} row={8} column="G">
                <Piece type="knight" isDark={true} row={8} column="G" />
              </Cell>
              <Cell isDark={true} row={8} column="H">
                <Piece type="rook" isDark={true} row={8} column="H" />
              </Cell>
            </tr>
            <tr id="row-7">
              <Cell isDark={true} row={7} column="A">
                <Piece type="pawn" isDark={true} row={7} column="A" />
              </Cell>
              <Cell isDark={false} row={7} column="B">
                <Piece type="pawn" isDark={true} row={7} column="B" />
              </Cell>
              <Cell isDark={true} row={7} column="C">
                <Piece type="pawn" isDark={true} row={7} column="C" />
              </Cell>
              <Cell isDark={false} row={7} column="D">
                <Piece type="pawn" isDark={true} row={7} column="D" />
              </Cell>
              <Cell isDark={true} row={7} column="E">
                <Piece type="pawn" isDark={true} row={7} column="E" />
              </Cell>
              <Cell isDark={false} row={7} column="F">
                <Piece type="pawn" isDark={true} row={7} column="F" />
              </Cell>
              <Cell isDark={true} row={7} column="G">
                <Piece type="pawn" isDark={true} row={7} column="G" />
              </Cell>
              <Cell isDark={false} row={7} column="H">
                <Piece type="pawn" isDark={true} row={7} column="H" />
              </Cell>
            </tr>
            <tr id="row-6">
              <Cell isDark={false} row={6} column="A"></Cell>
              <Cell isDark={true} row={6} column="B"></Cell>
              <Cell isDark={false} row={6} column="C"></Cell>
              <Cell isDark={true} row={6} column="D"></Cell>
              <Cell isDark={false} row={6} column="E"></Cell>
              <Cell isDark={true} row={6} column="F"></Cell>
              <Cell isDark={false} row={6} column="G"></Cell>
              <Cell isDark={true} row={6} column="H"></Cell>
            </tr>
            <tr id="row-5">
              <Cell isDark={true} row={5} column="A"></Cell>
              <Cell isDark={false} row={5} column="B"></Cell>
              <Cell isDark={true} row={5} column="C"></Cell>
              <Cell isDark={false} row={5} column="D"></Cell>
              <Cell isDark={true} row={5} column="E"></Cell>
              <Cell isDark={false} row={5} column="F"></Cell>
              <Cell isDark={true} row={5} column="G"></Cell>
              <Cell isDark={false} row={5} column="H"></Cell>
            </tr>
            <tr id="row-4">
              <Cell isDark={false} row={4} column="A"></Cell>
              <Cell isDark={true} row={4} column="B"></Cell>
              <Cell isDark={false} row={4} column="C"></Cell>
              <Cell isDark={true} row={4} column="D"></Cell>
              <Cell isDark={false} row={4} column="E"></Cell>
              <Cell isDark={true} row={4} column="F"></Cell>
              <Cell isDark={false} row={4} column="G"></Cell>
              <Cell isDark={true} row={4} column="H"></Cell>
            </tr>
            <tr id="row-3">
              <Cell isDark={true} row={3} column="A"></Cell>
              <Cell isDark={false} row={3} column="B"></Cell>
              <Cell isDark={true} row={3} column="C"></Cell>
              <Cell isDark={false} row={3} column="D"></Cell>
              <Cell isDark={true} row={3} column="E"></Cell>
              <Cell isDark={false} row={3} column="F"></Cell>
              <Cell isDark={true} row={3} column="G"></Cell>
              <Cell isDark={false} row={3} column="H"></Cell>
            </tr>
            <tr id="row-2">
              <Cell isDark={false} row={2} column="A">
                <Piece type="pawn" isDark={false} row={2} column="A" />
              </Cell>
              <Cell isDark={true} row={2} column="B">
                <Piece type="pawn" isDark={false} row={2} column="B" />
              </Cell>
              <Cell isDark={false} row={2} column="C">
                <Piece type="pawn" isDark={false} row={2} column="C" />
              </Cell>
              <Cell isDark={true} row={2} column="D">
                <Piece type="pawn" isDark={false} row={2} column="D" />
              </Cell>
              <Cell isDark={false} row={2} column="E">
                <Piece type="pawn" isDark={false} row={2} column="E" />
              </Cell>
              <Cell isDark={true} row={2} column="F">
                <Piece type="pawn" isDark={false} row={2} column="F" />
              </Cell>
              <Cell isDark={false} row={2} column="G">
                <Piece type="pawn" isDark={false} row={2} column="G" />
              </Cell>
              <Cell isDark={true} row={2} column="H">
                <Piece type="pawn" isDark={false} row={2} column="H" />
              </Cell>
            </tr>
            <tr id="row-1">
              <Cell isDark={true} row={1} column="A">
                <Piece type="rook" isDark={false} row={2} column="A" />
              </Cell>
              <Cell isDark={false} row={1} column="B">
                <Piece type="knight" isDark={false} row={2} column="B" />
              </Cell>
              <Cell isDark={true} row={1} column="C">
                <Piece type="bishop" isDark={false} row={2} column="C" />
              </Cell>
              <Cell isDark={false} row={1} column="D">
                <Piece type="queen" isDark={false} row={2} column="D" />
              </Cell>
              <Cell isDark={true} row={1} column="E">
                <Piece type="king" isDark={false} row={2} column="E" />
              </Cell>
              <Cell isDark={false} row={1} column="F">
                <Piece type="bishop" isDark={false} row={2} column="F" />
              </Cell>
              <Cell isDark={true} row={1} column="G">
                <Piece type="knight" isDark={false} row={2} column="G" />
              </Cell>
              <Cell isDark={false} row={1} column="H">
                <Piece type="rook" isDark={false} row={2} column="H" />
              </Cell>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Board;
