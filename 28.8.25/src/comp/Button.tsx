type Props = {
    onToggle: () => void
    onReset: () => void
    onAdd: () => void
    newOption: string
    setNewOption: React.Dispatch<React.SetStateAction<string>>

}

export default function Button({ onToggle, onReset, onAdd, setNewOption, newOption }: Props) {
    return (
        <div className="ctrl">
            <button className="button" onClick={onToggle}>Toggle Results</button>
            <button className="button" onClick={onReset} >Reset Votes</button>
            <button className="button" onClick={onAdd}>Add Option</button>
            <input
            className="input"
                type="text"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                placeholder="New option name"
            />
        </div >
    )
}
