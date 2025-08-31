export default function TextBox({inputRef}:any) {
  return (
    <div>
        <input ref={inputRef} placeholder="הכנס טקסט כאן..." />
    </div>
  )
}
