import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(e) {
    setTask(t => [...tasks, newTask]);
    setNewTask("");
    e.preventDefault();
  }

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  return (
    <div className='todo-container'>
      <h1>Todos</h1>
      <form>
        <input
          type='text'
          value={newTask}
          onChange={handleChange}
          placeholder='Enter a task...'
        />
        <button onClick={addTask}>Add</button>
      </form>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  )
}

export default App
