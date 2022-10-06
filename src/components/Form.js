import React from "react"
//import TodoList from "./TodoList"

const Form = ({setInputText,todos,setTodos,inputText,setStatus }) =>{

    const inputTextHandler =(e) =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();

        if (inputText === "") {
            alert("Please Enter a ToDo");
          } else {
            setTodos([
                ...todos,{text:inputText, completed:false, id:Math.random() * 1000}
            ])
          }



        
        // setTodos([
        //     ...todos,{text:inputText, completed:false, id:Math.random() * 1000}
        // ])

        setInputText("");
    }

    const statusHandler= (e) => {
        setStatus(e.target.value)
    }

    

    return(
        <form>
      <input 
       placeholder="Enter task..."
      value={inputText}
      onChange={inputTextHandler}
      type="text" 
      className="todo-input" 
      required/>
      <button  onClick = {submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}
export default Form
