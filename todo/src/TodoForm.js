function FormTodo(props) {
  return (
    <form className="todo-form" onSubmit={props.onSubmit}>
      <input
        className="todo-input" 
        value = {todo}
        onChange = {e => setTodo(e.target.value)}
      />
      <button className="btn btn-add">Add</button>
    </form>
  )
}

export default FormTodo;