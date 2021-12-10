import { useState } from "react"

const TodoForm = (props) => {

    const [form, setForm] = useState("")
    const [type, setType] = useState("all")

    const handleChange = (e) => {
        setForm(e.target.value)
    }

    const handleTypeChange = (e) => {
        setType(e.target.value)
        props.changeTypeInApp(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Create a new Todo
        props.createTodo(form)
        setForm("")
    }

    return (
        <div>
            <form>
                <input type="text" value={form} onChange={handleChange}/>
                <button onClick={handleSubmit}>Add Todo</button>
                <hr />

                <select name="todo-type" id="todo-type" onChange={handleTypeChange}>
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <hr />
            </form>
        </div>
    )
}

export default TodoForm
