import React from 'react'
import Todo from './Todo'


const Todos = (props) => {
    return (
        <div className='todolist'>
            {props.todos.map((todo)=>{
                return(
                    <Todo todo={todo}  changeTodo= {props.changeTodo} deliteHandler={props.deliteHandler} 
                    editTodo = {props.editTodo} />
                )
            })}
                   
                
           {props.todos.length === 0 ? (<h4>No todo</h4>) : null}
            
        </div>
    )
}

export default Todos
