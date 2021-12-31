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
  if (newTodo === "") return
  setTodos([...todos, {id: Date.now(), text: newTodo}])
  e.target.reset()
}
function removeTodo(id){
  setTodos(todos.filter((todo)=> todo.id != id))
}
  return (
    <div className="toDoList">
      <h1>ToDo</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder="Your todo list..." onChange={handleNewTodoChange}/>
        <ul>
        {todos.map((todo) => (
          <li key=
          {todo.id}>
          {todo.text}
          <a href="#" onClick={() => removeTodo(todo.id)}>X</a>
          </li>
        ))}
        </ul>
      </form>
    </div>
  );
}
