import { useState } from "react"


const Todo = () => {
    
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])
    
    function addTodo(e) {
        e.preventDefault()
        settodos([todo, ...todos])
        settodo("")
    }
    function deleteTodo(indexToDelete){
        settodos(todos.filter(( _,index) => index !== indexToDelete))
    }


    return <div className="todo-app">
        <div className="app">
        
             <h1>TODO APP</h1>
             <form action="" onSubmit={addTodo}>
             <input required onChange={(e) => settodo(e.target.value)}  type="text" />
             <button type="submit">Submit</button>
             </form>
        
             {todos.map((item, index) => (
             <div>
                 <label htmlFor="inputcheck">{item}</label>  
                 <input key={index} type="checkbox" id="inputcheck" />
                 <button onClick={() => deleteTodo(index)}>Delete</button>
             </div>
             ))}
        </div>
        
        

    </div>
}

export default Todo