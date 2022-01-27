import React, { useRef } from "react"
import "./styles.css"

interface IToDoProps {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<IToDoProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
        type='input'
        placeholder='Enter a task'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className='input__box'
      />
      <button className='input__submit' type='submit'>
        Go
      </button>
    </form>
  )
}

export default InputField
