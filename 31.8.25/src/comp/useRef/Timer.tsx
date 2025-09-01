import { useRef, useState } from "react"

export default function Timer() {
    const [seconds, setSeconds] = useState(0)
    const idRef: any = useRef(null)

    function start() {
        if (idRef.current === null) {
            idRef.current = setInterval(() => {
                setSeconds(prev => prev + 1)
            }, 1000)
        }
        else {
            return
        }
    }

    function stop() {
        if (idRef.current !== null)
            clearInterval(idRef.current);
        idRef.current = null
    }
    return (
        <div>
            <span>Seconds:{seconds}</span>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    )
}


// export default function Timer() {
//     const [seconds, setSeconds] = useState(0)
//     const [id, setId] = useState(0)

//     function start() {
//         if (id === null) {
//             setId(window.setInterval(() => {
//                 setSeconds(prev => prev + 1)
//             }, 1000))
//         }
//         else {
//             return
//         }
//     }

//     function stop() {
//         if (id !== null)
//             clearInterval(id);
//         setId(null)

//     }
//     return (
//         <div>
//             <span>Seconds:{seconds}</span>
//             <button onClick={start}>start</button>
//             <button onClick={stop}>stop</button>
//         </div>
//     )
// }
