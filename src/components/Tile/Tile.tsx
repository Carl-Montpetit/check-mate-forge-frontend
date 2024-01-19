import styles from "./Tile.module.css";

interface Props {
  image: string | undefined;
  x: number;
  y: number;
}

function Tile({ image, x, y }: Props) {
  const number = x + y + 2;

  if (number % 2 === 0)
    return (
      <div id={`tile-${x}-${y}`} className={styles.blackTile}>
        {image && (
          <div
            id={`piece-${x}-${y}`}
            className={styles.piece}
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
      </div>
    );
  else
    return (
      <div id={`tile-${x}-${y}`} className={styles.whiteTile}>
        {image && (
          <div
            id={`piece-${x}-${y}`}
            className={styles.piece}
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
      </div>
    );
}

export default Tile;
