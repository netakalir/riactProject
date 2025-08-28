
import { useState } from "react";
import "./profile.css";
type ButtonProps = {
    label: string;
    name: string;
    onClick: () => void;
}

export default function Button(props: ButtonProps) {
    let className: string;
    if (props.name === "neta" || props.name === "naomi") {
        className = "button1";
    } else {
        className = "button2";
    }
    const [t, setT] = useState("by")
    return (
        <>
            <h1>{t}</h1>
            <button className={className} onClick={()=>setT("hi")}>
                {props.label}
            </button>
        </>
    );
}
