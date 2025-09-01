import { useRef, useState } from "react";
// import Input from "./comp/Input";
import TextBox from "./comp/useRef/TextBox";
import Counter from "./comp/useRef/counter";
import Timer from "./comp/useRef/Timer";
import Clicks from "./comp/useRef/Clicks";
import Greet from "./comp/useEffect/Greet";
import Name from "./comp/useEffect/Name";
import TimerU from "./comp/useEffect/Timer";


export default function App() {
  const inputRef = useRef(null)
  const [value, setValue] = useState("");
  const showValue = () => {
    if (inputRef.current) {
      setValue(inputRef.current.value);
    }
  }
  return (
    <>
      <div>
        {/* <Input /> */}
        {/* <TextBox inputRef={inputRef} /> */}
        {/* <button onClick={showValue}>show value</button> */}
        {/* <p>text:{value}</p> */}
        {/* <Counter /> */}
        <Timer />
        {/* <Clicks /> */}
        <br />
        {/* <Greet /> */}
        {/* <Name /> */}
        <TimerU />
      </div>
    </>
  )
}
