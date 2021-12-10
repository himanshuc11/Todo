import Todo from "./Todo"

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo) => <Todo key={todo.id} {...todo} toggle={props.toggle} deleteTodo={props.deleteTodo}></Todo>)}
        </div>
    )
}

export default TodoList
