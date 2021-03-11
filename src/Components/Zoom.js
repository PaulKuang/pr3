import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import { useState, useEffect } from 'react'
import React, { Component }  from 'react'

function Zoom() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    return data
  }
  //Fetch Tasks

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask= {id, ...task}
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    // alert('delete' + id )
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task)=> 
      task.id === id ? { ...task, 
        reminder: !task.reminder} : task))
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