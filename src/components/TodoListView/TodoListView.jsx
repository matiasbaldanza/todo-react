import TodoListItem from "../TodoListItem/TodoListItem"
import './TodoListView.css'

export default function TodoListView({todos, actions}) {
    return  <ul className="todo-list-view">
                {todos.map(todo => {
                    return <TodoListItem 
                        key={todo.id}
                        id={todo.id}
                        actions={actions}
                    >{todo.value}</TodoListItem>
                })}
            </ul>
}