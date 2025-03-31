function TodoFooter({todos,onClearComplated}) {
   const complatetSize = todos.filter((todo)=>todo.isCompleted).length;
    return (
        <div>
            <span>{complatetSize}/{TodoList.length}Completed</span>
            <button onClick={onClearComplated}>Clear Completed</button>
        </div>
    )    
}
export default TodoFooter;