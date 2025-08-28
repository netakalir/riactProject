import { useState } from "react"
import "./style.css"
import VoteBtn from "./VoteBtn"

type OptionsProps = {
    options:string[]
    showResults: boolean
    votes: number[]
    setVotes: React.Dispatch<React.SetStateAction<number[]>>
}

export default function Options({ showResults, votes, setVotes ,options}: OptionsProps) {
    const handleVote = (index: number) => {
        const newVotes = [...votes]
        newVotes[index] += 1
        setVotes(newVotes)
    }
    return (
        <>
            <div className="option">
                <label className="label">options</label>
                <h3 className="options">[{options.join(", ")}]</h3>
                <p className="label">voting</p>
                <ul className="voting">
                    {options.map((opt, index) => (
                        <li className="liVote" key={opt}>
                            {opt}{showResults && `- ${votes[index]} votes`}
                            <VoteBtn onVote={() => handleVote(index)} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
