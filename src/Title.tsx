import styles from "./Title.module.css";

interface Props {
  text: string;
}
function Title({ text }: Props) {
  return (
    <div id="title-container">
      <h1 className={styles.titleHeader}>{text}</h1>
    </div>
  );
}

export default Title;
