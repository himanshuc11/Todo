import { useState } from "react"

import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

import { v4 as uuidv4 } from 'uuid';


const App = () => {

    const [type, setType] = useState("all")    // {"all", "complete", "incomplete"}
    const [todos, setTodos] = useState([])     // [todos]

    const changeType = (newType) => {
        setType(newType)
    }

    const createTodo = (todoTask) => {
        let todo = {id: uuidv4(), todo: todoTask, isComplete: false}
        setTodos([...todos, todo])

        // let newTodos = []
        // for(let i = 0; i < todos.length; i++)
        // {
        //     newTodos.push(todos[i])
        // }
        // newTodos.push(todo)
        // setTodos(newTodos)
    }


    const toggleCompletion = (toggleTodo) => {
        toggleTodo.isComplete = !toggleTodo.isComplete
        let newTodos = todos.map((todo) => {
            if(todo.id === toggleTodo.id) {
                return {...toggleTodo}
            }
            return todo
        })
        setTodos(newTodos)
    }

    const deleteTodo = (toDelete) => {
        let newTodos = todos.filter((todo) => {
            if(todo.id === toDelete.id) {
                return false
            }
            return true
        })
        setTodos(newTodos)
    }

    const requiredTodos = () => {
        if(type === "all") {
            return todos
        }
        else if(type === "incomplete") {
            return todos.filter((todo) => todo.isComplete === false)
        }
        else { // type === "complete"
            return todos.filter((todo) => todo.isComplete === true)
        }
    }

    return (
        <div>
            <TodoForm changeTypeInApp={changeType} createTodo={createTodo} />
            <TodoList todos={requiredTodos()} toggle={toggleCompletion} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default App
