import { useState } from "react"
import './TodoForm.css'

export default function TodoForm({ handleNewTodo }) {
    const [newTodo, setNewTodo] = useState('')
    
    return (
        <form 
            action="submit"
            onSubmit={(event) => {
                event.preventDefault()
                handleNewTodo(newTodo)
                setNewTodo('')
                }
            }
        >
            <label htmlFor="todo-input">
                <input 
                    type="text" 
                    id="todo-input"
                    value={newTodo}
                    autoComplete="off"
                    onChange={event => setNewTodo(event.target.value)}
                />
            </label>
            <button type="submit">Add</button>
        </form>
    )
}