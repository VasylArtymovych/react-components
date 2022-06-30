

export const TodoItem = (todo, onDelete, onToggle) =>{
    return (
        <li>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={()=>{onToggle(todo.id)}}
            />
            <p>{todo.text}</p>
            <button onClick={()=>{onDelete(todo.id)}}>
                remove
            </button>
        </li>);
} 







