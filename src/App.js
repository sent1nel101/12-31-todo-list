import "./index.css";
import React, { useState} from 'react'

export default function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])
  var errorMessage = ""

function handleNewTodoChange (e){
  e.preventDefault()
  setNewTodo(e.target.value)
}
function handleNewTodo(e){
  e.preventDefault()
  if (newTodo === "") {
    alert("Please enter some text.")
    return
  }else{
  setTodos([...todos, {id: Date.now(), text: newTodo}])
  e.target.reset()
  setNewTodo('')
}
}
function removeTodo(id){
  var answer = window.confirm("Are you sure?")
  if (answer){
    setTodos(todos.filter((todo)=> todo.id !== id))
}else {
  return
}
}
function saveBtnClick(){
  handleNewTodo()
}
  return (
    <div className="toDoList">
      <h1>ToDo Tracker</h1>
      <form onSubmit={handleNewTodo}>
        <div className="inputDiv">
          <input placeholder="Your todo list..." onChange={handleNewTodoChange}/>
          <button id="saveBtn" type="submit"><img id="plusIcon" src="./plus.png" /></button>
        </div>
        <ul>
        {todos.map((todo) => (
          <li key=
          {todo.id}>
          {todo.text}
          <a id="clearBtn" href="#" onClick={() => removeTodo(todo.id)}><img id="cancelImg" src="https://www.clipartmax.com/png/middle/307-3077324_x-mark-cross-computer-icons-clip-art-red-cross-icon.png" /></a>
          </li>
        ))}
        </ul>
      </form>
    </div>
  );
}
