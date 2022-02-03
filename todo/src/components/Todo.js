import React from 'react'
import FeatherIcon from 'feather-icons-react'


const Todo = (props) => {
    let {id,title,done}=props.todo
    
    return (
        <div className= {done ? "todos-todo done" : "todos-todo"}>
            <div className='todos-todo_icon' onClick={()=>props.changeTodo(id)}>
                <FeatherIcon icon={done ? "check-circle" : "circle"} />
            </div>
            <div className='todos-todo_text'> {title} </div>
            <div className='todos-todo_cta'>
                <div className='todos-todo_cta-edit'>
                    <FeatherIcon icon='edit-2' size='15' onClick={()=>props.editTodo(props.todo)} />
                </div>
                <div className='todos-todo_cta-delite' onClick={()=>props.deliteHandler(id)}>
                    <FeatherIcon icon ='trash-2' size='15'/>
                </div>
            </div>
        </div>
    )
}

export default Todo
