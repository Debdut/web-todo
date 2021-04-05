export function Checkbox ({ on, update }) {
  return <span class='text-2xl cursor-pointer' onClick={() => update(!on)}>{ on ? '✅' : '✓' }</span>
}

export function Select ({ options, placeholder, value, update }) {
  return (
    <select class='p-2 pr-10 border-2 border-blue-400' onChange={update} value={value}>
      <option default>{placeholder}</option>
      {options.map((option, index) => <option value={index} key={index}>{option}</option>)}
    </select>
  )
}

export function Star ({ on, update }) {
  return <span class='text-2xl cursor-pointer' onClick={() => update(!on)}>{on ? '⭐' : '✩'}</span>
}