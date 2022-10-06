import React ,{useState, useEffect} from "react"
import './App.css';
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all")

  useEffect(() => {
    getLocalTodos();
  },[])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos,status])

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
        setFilteredTodos(todos);
        break;

    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem("a", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("a") === null){
      localStorage.setItem("a", JSON.stringify([]));
    }else {
     const todoLocal =JSON.parse(localStorage.getItem("a"))
     setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Mo's ToDo List</h1>
      </header>
      <Form inputText={inputText}
       setInputText={setInputText} 
       todos={todos} 
       setTodos={setTodos} 
       setStatus={setStatus}
       />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
    
  );
}

export default App;
