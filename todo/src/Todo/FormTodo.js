function FormTodo(props) {
  const setTodo = props.setTodo;
  return (
    <form className="todo-form" onSubmit={props.addTodo}>
      <input
        className="todo-input" 
        value = {props.todoItem}
        onChange = {e => setTodo(e.target.value)}
      />
      <button className="btn btn-add">Add</button>
    </form>
  )
}

export default FormTodo;