import { useRef, useState } from "react"

export default function Clicks() {
    const clicks = useRef(0)
    const [viewClicks, setViewClicks] = useState()

    const addClick = () => {
        clicks.current = clicks.current + 1
    }

    const show = () => {
        setViewClicks(clicks.current + 1)
    }
    
    return (
        <div>
            <button onClick={addClick}>click my</button>
            <button onClick={show}>show total clicks</button>
            {viewClicks && <p>Total Clicks: {clicks.current}</p>}
        </div>
    )
}
