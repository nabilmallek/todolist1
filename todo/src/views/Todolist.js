
import React,{useState} from 'react'
import TodoForm from '../components/TodoForm'
import Todos from '../components/Todos'

const Todolist = () => {
    const intialeState =[
        {id:1,title:"bay a car",done:false},
        {id:2,title:"bay a house",done:true},
        {id:3,title:"bay a shose",done:false},
        {id:4,title:"bay a book",done:true}
    ]
       const [todos,setTodos] = useState(intialeState)
       const [mode,setMode] = useState("add")
      const [activeTodo,setActiveTodo] = useState({})
      
       const changeTodo = (id) =>{
           const curTodos = [...todos]
           const newTodos = curTodos.map((el)=>{
               if(el.id === id){
                   el.done = !el.done
                   return el
               }
               return el
           })
          setTodos(newTodos)
       }
       const deliteHandler = (id)=>{
           const curTodos = [...todos]
           const newTodos = curTodos.filter((el)=> el.id !== id)
           setTodos(newTodos)
       }

       const addTodoHandler = (title)=>{
           if(mode !== "edit"){
            const newTodo = {
                id:Date.now(),
                title:title,
                done:false
            }
            const newTodos =[...todos,newTodo]
            setTodos(newTodos)
           }else {
               const currentTodos =[...todos]
               const newTodos = currentTodos.map((el)=>{
               if (el.id === activeTodo.id){
                   el.title =title
                   return el
               }
               return el
               })
               setTodos(newTodos)
               setActiveTodo({})
               setMode("add")
           }
           
       }

       const showUncompmiteTodo = ()=>{
           if(mode === "not done"){
               setMode("add")
           } else {
               setMode("not done")
           }
           
       }
       let currentTodos =[...todos]
           if(mode ==="not done"){
               currentTodos = currentTodos.filter((todo)=>!todo.done)
           }
           const editTodo = (todo)=>{
            setMode("edit")
            setActiveTodo(todo)
           }
        
return (
        <main>
        <div className='container'>
            <div className='todos'>
                <TodoForm  addTodoHandler={addTodoHandler} showUncompmiteTodo={showUncompmiteTodo}
                todos={mode !== "edit" ? currentTodos:[activeTodo]} mode={mode} />
                <Todos  todos={mode !== "edit" ? currentTodos:[activeTodo]}  changeTodo= {changeTodo} deliteHandler={deliteHandler}
                editTodo ={editTodo} />
            </div>
           
        </div>
        </main>
    )
}

export default Todolist
