import React,{useState} from 'react'
import FeatherIcon from 'feather-icons-react'






const TodoForm = (props) => {
    const [newTitle,setnewTitle]=useState("")
    const [editRender,setEditRender] = useState(false)

    if(props.mode === "edit" && !editRender){
        setnewTitle(props.todos[0].title)
        setEditRender(true)
    }
    
    
    
    const newTitleHandler =(event)=>{
        setnewTitle(event.target.value)

    }
    const addnewTodoHandler =()=>{
        let nTitle = newTitle
        setnewTitle("")
        setEditRender(false)
       return props.addTodoHandler(nTitle)
    }
    let btnString = "add"
    if (props.mode === "edit"){
        btnString = "Edit"
    }
    
    return (
        <div className='todos-form'>
            <div className='todos-form_icon' onClick={props.showUncompmiteTodo}>
            <FeatherIcon icon='circle' size='20'/>
            </div>
            <div className='todos-form_form'>
                <input type="text"  placeholder='todolist' onChange={newTitleHandler} value={newTitle}/>
            </div>
            <div className='todos-form_submit'>
                <button className='btn' onClick={addnewTodoHandler}> {btnString} </button>
            </div>
             
        </div>
    )
}

export default TodoForm
