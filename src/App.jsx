import { useState } from "react"

import TodoForm from "./TodoForm"
import TodoList from "./TodoList"


const App = () => {

    const [type, setType] = useState("all")    // {"all", "complete", "incomplete"}
    const [todos, setTodos] = useState([])

    const changeType = (newType) => {
        setType(newType)
    }

    const createTodo = (todo) => {
    
    }

    return (
        <div>
            <TodoForm changeTypeInApp={changeType} />
            <TodoList />
        </div>
    )
}

export default App
