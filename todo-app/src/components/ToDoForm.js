import React, { useState } from "react";
import styles from "../styles/ToDoForm.module.css"

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!text) return;
      addTodo(text);
      setText("");
    };
  
    return (
        <form className={styles["todo-form"]} onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Add a Task</label>
        <input
          type="text"
          id="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
          className={styles["todo-input"]}
        />
        <button type="submit" className={styles["todo-button"]}>
          Add Task
        </button>
      </form>
      
    );
  }
  
  export default TodoForm;