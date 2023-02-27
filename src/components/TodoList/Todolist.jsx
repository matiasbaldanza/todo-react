import { useState } from "react"
import TodoForm from "../TodoForm/TodoForm.jsx"
import TodoListView from "../TodoListView/TodoListView.jsx"
import { readLS, setLS } from "../../localStorage.js"

export function TodoList() {
    const [todos, setTodos] = useState(() => readLS("todos") || [])

    function handleNewTodo(newTodo) {
        const updatedTodos = [...todos, { id: Date.now(), value: newTodo}]
        setTodos(updatedTodos)
        setLS("todos", updatedTodos)
    }

    function deleteTodo(id) {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
        setLS("todos", updatedTodos)
    }
    
    return (
        <>
            <TodoForm 
                handleNewTodo={handleNewTodo}
            />
            <TodoListView 
                todos={todos}
                actions={{deleteTodo}}
            />
        </>
    )
    
}