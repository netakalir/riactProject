import { useState } from "react"


export default function Emoji() {
    const [mode, setMOde] = useState<any>("😐 Neutral")
    const emojis = ["😁 happy", "😒 sad", "🤬 angry"]
    const index = Math.floor(Math.random() * emojis.length + 1)
    let [history, setHistory] = useState<string[]>([])
    let [counts, setCount] = useState(
        {
            "happy": 0,
            "sad": 0,
            "angry": 0
        }
    )
    function addToHistory() {
        return history.map((item) => {
            return <li>{item}</li>
        })
    }

    
    return (
        <>
            <div>
                <h1>{mode}</h1>
            </div>
            <div>
                <button onClick={() => { setMOde("😁 happy"); setHistory(prev => [...prev, "😁 happy"]); setCount(prev => ({ ...prev, "happy": counts.happy + 1 })) }} >😁 happy</button>
                <button onClick={() => { setMOde("😒 sad"); setHistory(prev => [...prev, "😒 sad"]); setCount(prev => ({ ...prev, "sad": counts.sad + 1 })) }} >😒 sad</button>
                <button onClick={() => { setMOde("🤬 angry"); setHistory(prev => [...prev, "🤬 angry"]); setCount(prev => ({ ...prev, "angry": counts.angry + 1 })) }} >🤬 angry</button>
                <button onClick={() => { setMOde("😐 Neutral"); setHistory([]) }}> ♻️ restart</button>
                <button onClick={() => setMOde(emojis[index])}>☠️ random</button>
            </div>
            <p>history:</p>
            <ol>
                {addToHistory().slice(-3)}
            </ol>
            <br />
            <p>counter:</p>
            <ul>
                <li>{`😁 happy: ${counts.happy}`}</li>
                <li>{`😒 sad: ${counts.sad}`}</li>
                <li>{`🤬 angry: ${counts.angry}`}</li>
            </ul>
        </>
    )
}
