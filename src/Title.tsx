import styles from "./Title.module.css";

interface TitleProps {
  text: string;
}
function Title({ text }: TitleProps) {
  return (
    <div id="title-container">
      <h1 className={styles.titleHeader}>{text}</h1>
    </div>
  );
}

export default Title;
