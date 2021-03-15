import {FaTimes} from 'react-icons/fa'
import React, { Component }  from 'react';

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className = {`task ${task.important ? 'reminder': ''}`}
            onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.title} <FaTimes 
            style = {{color: 'red', cursor: 'pointer'}}
            onClick = {()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>
            <a href={task.textInfor}>{task.textInfor}</a>
        </div>
    )
}

export default Task
