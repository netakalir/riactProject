import Header from "./comp/header";
import "./App.css"
import Options from "./comp/options";
import Button from "./comp/button";
import { useState } from "react";

export default function App() {
  const [options, setOptions] = useState(["React", "Vue", "Svelte"])
  const [votes, setVotes] = useState([0, 0, 0])
  const [showResults, setShowResults] = useState(false)
  const [newOption, setNewOption] = useState("")

  const resetResults = () => {
    setVotes([0, 0, 0])
  }
  const toggleResults = () => {
    setShowResults(!showResults)
  }

  const addOption = () => {
    if (!newOption.trim()) return
    setOptions(prev => [...prev, newOption])
    setVotes(prev => [...prev, 0])
    setNewOption("")
  }
  return (
    <>
      <div className="appBody">
        <Header />
        <Options showResults={showResults} votes={votes} setVotes={setVotes} options={options} />
        <Button onToggle={toggleResults} onReset={resetResults} newOption={newOption} setNewOption={setNewOption} onAdd={addOption} />
      </div>
    </>
  )
}
