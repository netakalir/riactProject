import { useEffect, useState } from "react"

export default function Greet() {
    const [data, setD] = useState("")
    const add = async () => {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        setD(data.message)
    }
    useEffect(() => {
        console.log("fatched")
    }, [])
    return (
        <div>
            <p>hello oretor</p>
            <button onClick={add}> add</button>
            <img src={data} alt="" />
        </div>
    )
}
