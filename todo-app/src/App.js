
import './App.css';
import React, { useState } from "react";
import TodoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
