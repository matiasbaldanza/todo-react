import './TodoListItem.css'

export default function TodoListItem({id, actions, children}) {
    return ( 
        <li className="todo-list-item">
            { children }
            <button
                onClick={() => actions.deleteTodo(id)}
            >X</button>
        </li>
    )
}