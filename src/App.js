import { useReducer, useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';
function reducer(state,action) {
  if (action.type === "add") {
    return [
      ...state,
      {
        id:Math.random(),
        text: action.payload.text,
        isCompleted: false
      }
    ]
  }else if(action.type === "delet"){
    return state.filter((t) => t.id !== action.payload.id)
  }
}
// function useReducer(reducer,inityolState) {
//   const [state, setState] = useState(inityolState)
//   return [state, (action) => {
//      setState(newState)
//   }]
// }
function App() {
 const [todos,dispach] = useReducer(reducer,[
    {
      id:Math.random(),
      text: "Learn JS",
      isCompleted:false
    },
    {
      id:Math.random(),
      text: "Learn CSS",
      isCompleted:false
    },
    {
      id:Math.random(),
      text: "Learn React",
      isCompleted:false
    }
  ])
  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        dispach({
          type: 'add',
          payload: {
          text: text
        }
        })
       
      }}/>
      <TodoList
       todos={todos}
       onDelete={(todo)=>{
        dispach({
          type: "delet",
          payload: {
            id:todo.id
          }
        })
        // setTodos(todos.filter((t)=> t.id !== todo.id))
       }}
       onChange={(newTodo)=>{
        setTodos(todos.map((todo) => {
          if(todo.id === newTodo.id) {
            return newTodo;
          }
          return todo 
        }));
       }}
       />
      <TodoFooter todos={todos} onClearComplated={()=> {
        setTodos(todos.filter((todo) => !todo.isCompleted))
      }}/>
    </div>
  );
}

export default App;
