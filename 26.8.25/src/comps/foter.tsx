type Foter = {
    foter : string
}

export default function Foter(props:Foter) {
  return (
    <div>
        <p className="foter">{props.foter}</p>
    </div>
  )
}
