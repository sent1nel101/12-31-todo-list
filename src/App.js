import "./index.css";
import React, { useState} from 'react'

export default function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

function handleNewTodoChange (e){
  e.preventDefault()
  setNewTodo(e.target.value)
}
function handleNewTodo(e){
  e.preventDefault()
  console.log(todos)
}
  return (
    <div className="ToDoList">
      <h1>ToDo</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder="Your todo list..." onchange={handleNewTodoChange}/>
        <ul>
          <li>Buy bread</li>
          <li>Get dry cleaning</li>
          <li>Clean car</li>
          <li>Meet Danny at park</li>
        </ul>
      </form>
    </div>
  );
}
