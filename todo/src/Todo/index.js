import { useState } from 'react';
import { getStorage, setStorage } from './comon';
import { listKeys } from './constant';
import FormTodo from './FormTodo';
import ListTodo from './ListTodo';
import '../App.css';

function App() {
  const todoListLocal = getStorage(listKeys.todoList);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState(todoListLocal || []);
  const addTodo = (e) => {
    e.preventDefault();
    if(todo.trim()) {
      setTodoList(listPrev => {
        const listNew = [...listPrev, todo];
        setStorage(listKeys.todoList, listNew);
        return listNew;
      });
      setTodo('');
    }
  }

  const removeTodo = (index) => {
    setTodoList(listPrev => {
      const listNew = [...listPrev];
      listNew.splice(index,1);
      setStorage(listKeys.todoList, listNew);
      return listNew;
    })
  }

  return (
    <div className="container">
      <div className="todo">
      <h1 className="todo-title">Todo App</h1>
      <FormTodo 
        addTodo = {addTodo}
        todoItem = {todo}
        setTodo = {setTodo}
      />
      <ListTodo 
        todoList = {todoList}
        removeTodo = {removeTodo}
      />
      </div>
    </div>
  );
}

export default App;
