import "./profile.css";
import Button from "./button";


type ProfileProps = {
    userName: string;
    description: string;
    imageUrl: string;
}
import { useRef } from "react";
export default function Profile(props: ProfileProps) {
    const imgRef = useRef<HTMLImageElement>(null);
    const handleClick = () => {
        if (imgRef.current) {
            imgRef.current.classList.add("rotate360");
            setTimeout(() => {
                imgRef.current?.classList.remove("rotate360");
            }, 1000); // זמן האנימציה ב-ms
        }
    };
    return (
        <>
            <div className="cardProfile">
                <img ref={imgRef} className="img" src={props.imageUrl || "defult"} alt={"img"} />
                <h2 className="name">{props.userName}</h2>
                <p className="description">{props.description}</p>
                <Button
                    label="clilk"
                    name={props.userName}
                    onClick={handleClick}
                />
            </div>
        </>
    );
}

