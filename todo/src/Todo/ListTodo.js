function ListTodo(props) {
  const removeTodo = props.removeTodo;
  return (
    <ul className="todo-list">
      {props.todoList.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button 
              className="btn btn-remove" 
              onClick = {() => {removeTodo(index)}}
            >X</button>
          </li>        
      ))}
    </ul>
  )
}

export default ListTodo;
