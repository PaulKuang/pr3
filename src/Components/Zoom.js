import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import UpdateTask from './UpdateTask'
import { useState, useEffect } from 'react'
import React, { Component }  from 'react'

function Zoom() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [signal, setSignal] = useState(false)
  const [tasks, setTasks] = useState([])
  const [id, setID] = useState(-1)

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }
  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
    })
    res.status === 200
        ? setTasks(tasks.filter((task) => task.id !== id))
        : alert('Error Deleting This Task')
  }

  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task)=> 
      task.id === id ? { ...task, 
        important: !task.important} : task))
  }

  return (
      <div className="container">
        <Header title = "Zoom Meeting Manager"
        onAdd={()=>setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd = {addTask}/>}
        {tasks.length > 0 ? 
        <Tasks tasks={tasks} 
        onDelete = {deleteTask}
        onToggle={toggleReminder} /> : 'No Tasks To Show'}
      </div>
  );
}

export default Zoom;