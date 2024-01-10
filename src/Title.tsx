import "./Title.css";

interface TitleProps {
  text: string;
}
function Title({ text }: TitleProps) {
  return (
    <div id="title-container">
      <h1 id="title-header">{text}</h1>
    </div>
  );
}

export default Title;
