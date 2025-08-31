import { useRef, useState } from "react"

export default function Input() {

    // const [input, setInput] = useState("neta")
    // const claerInput = () => {
    //     setInput("")
    // }

    console.log("rendered")
    const inputRef: any = useRef(null)
    const clear = () => {
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }

    return (
        <>
            <div>
                <input ref={inputRef} type="text" />
                <button onClick={clear}>
                    claer
                </button>

            </div>
        </>
    )
}
