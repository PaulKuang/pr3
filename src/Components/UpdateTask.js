import {useState} from 'react'
import React, { Component }  from 'react';

const UpdateTask = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [textInfor, setTextInfor] = useState('')
    const [important, setImportant] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        //validation part need implement
        if(!title){
            alert('Title needs to be non-empty')
            return
        }
        if(title.length > 30){
            alert('Title needs to be within 30 characters')
            return
        }
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var d1 = Date.parse(date)
        var d2 = Date.parse(day)
        if(d1 > d2){
            alert("Date needs to be greater than current date")
            return
        }
        if(!textInfor.includes("zoom")){
            alert("Zoom link must contain the string ’zoom’")
            return
        }


        onAdd({title, day, textInfor, important})
        setTitle('')
        setDay('')
        setTextInfor('')
        setImportant(false)
    }
    return (
        <form className='add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input type = 'text' placeholder='Add Task'
                value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type = "date"
                 value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Zoom Link</label>
                <input type = 'text' placeholder='Zoom link to the meeting'
                 value={textInfor} onChange={(e)=>setTextInfor(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Important</label>
                <input type = 'checkbox'
                 checked = {important}
                 value={important} onChange={(e)=>setImportant(e.currentTarget.checked)}/>
            </div>
            <input type = 'submit' value='Save Task' className = 'btn btn-block'/>
        </form>
    )
}

export default UpdateTask
