import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form.component'
import ToDoList from './components/ToDoList.component';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setToDos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredToDos, setFilteredToDos] = useState([])

  useEffect(() => {
    const getLocalToDos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]))
      } else {
        let localtodo = JSON.parse(localStorage.getItem('todos'))
        setToDos(localtodo)
      }
    }
    getLocalToDos()
  }, [])

  useEffect(() => {
    const saveLocalToDos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredToDos(todos.filter(item => item.completed === true))
          break

        case "uncompleted":
          setFilteredToDos(todos.filter(item => item.completed === false))
          break

        default:
          setFilteredToDos(todos)
          break
      }
    }
    filterHandler()
    saveLocalToDos()
  }, [todos, status])


  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setToDos={setToDos} setInputText={setInputText} setStatus={setStatus} />
      <ToDoList todos={todos} setToDos={setToDos} inputText={inputText} filteredToDos={filteredToDos} />
    </div>
  );
}

export default App;
