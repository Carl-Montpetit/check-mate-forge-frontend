import styles from "./Title.module.css";

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.titleHeader}>{text}</h1>
    </div>
  );
};

export default Title;
