import { useRef, useState } from "react";
// import Input from "./comp/Input";
import TextBox from "./comp/TextBox";
import Counter from "./comp/counter";
import Timer from "./comp/timer";
import Clicks from "./comp/Clicks";
import Greet from "./comp/greet";


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
        <TextBox inputRef={inputRef} />
        <button onClick={showValue}>show value</button>
        <p>text:{value}</p>
        <Counter />
        <Timer />
        <Clicks />
        <br />
        <Greet />
      </div>
    </>
  )
}
