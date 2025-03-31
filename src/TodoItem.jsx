function TodoItem(todo) {
    return(
        <div>
            <label>     
                <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
                    // e.target.checked
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }} />
                {todo.text}
                <button onClick={() => {
                    onDelete(todo )
                }}>X</button>
            </label>
        </div>
    )
}
export default TodoItem 