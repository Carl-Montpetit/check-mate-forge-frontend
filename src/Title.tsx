import "./Title.css";

// eslint-disable-next-line react-refresh/only-export-components
interface TitleProps {
  text: string;
}
function Title({ text }: TitleProps) {
  return (
    <div id="title-component">
      <h1 id="title">{text}</h1>
    </div>
  );
}

export default Title;
