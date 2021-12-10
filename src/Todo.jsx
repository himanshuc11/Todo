const Todo = ({id, todo, isComplete, toggle, deleteTodo}) => {

    let paramTodo = {
        id: id,
        todo: todo,
        isComplete: isComplete
    }

    return (
        <div>
            {isComplete ? <del onClick={() => toggle(paramTodo)}>{todo}</del>: <p onClick={() => toggle(paramTodo)} style={{display: "inline"}}>{todo}</p>}
            <button onClick={() => deleteTodo(paramTodo)}>X</button>
        </div>
    )
}

export default Todo
