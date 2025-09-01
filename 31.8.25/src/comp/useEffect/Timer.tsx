import { useEffect, useRef, useState } from "react"

export default function TimerU() {
    const [timer, setTimer] = useState(0)
    const idRef = useRef(0)

    useEffect(() => {
        idRef.current = setInterval(() => {
                setTimer(prev => prev + 1)
            }, 1000)
            return ()=>{
                clearInterval(idRef.current)
            }
    }, [])

    const newArond = ()=>{
        setTimer(0)
    }
    return (
        <div>
            {timer}
            <button onClick={newArond}>new arond</button>
        </div>
    )
}
