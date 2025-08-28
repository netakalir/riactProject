import "./title.css";

type TitleProps = {
    title: string;
   
}
export default function Title(props:TitleProps) {
  return (
    <div>
        <h2 className="title">{props.title}</h2>
    </div>
  )
}
