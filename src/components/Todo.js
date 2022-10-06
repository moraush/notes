import React from "react";

const Todo = ({text,todos,todo,setTodos}) => {

    const deleteHandler = () => {

        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log("hi")

    };

    const completedCheck=() => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !todo.completed
                }
            }

            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completedCheck} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>


        </div>

    );


}

export default Todo;