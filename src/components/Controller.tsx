import { FC, useContext, useState } from "react";
import { TodoContextType, TodolistContext } from "../context/todolistContext";

const Controller: FC = () => {
  const { saveTodo } = useContext(TodolistContext) as TodoContextType;
  const [newTask, setNewTask] = useState<string>("");
  const saveHandler = () => {
    newTask.length && saveTodo(newTask);
    setNewTask("");
  };
  return (
    <header className="header">
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Task..."
          name="task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <button onClick={saveHandler}>Add Task</button>
    </header>
  );
};

export default Controller;
