import { useRef, useState } from "react"

export default function Counter() {
    const [count, setCount]: any = useState(0)
    const prevCount:any = useRef(null)

    const plos = () => {
        prevCount.current = count
        setCount(count+1)
    }
    const minus = () => {
        prevCount.current  = count
        setCount(count-1)
    }
    return (
        <div>
            <p>countCurrent = {count}</p>
            <p>prevCurrent = {prevCount.current}</p>
            <button onClick={plos}>plos</button>
            <button onClick={minus}>minus</button>
        </div>
    )
}
