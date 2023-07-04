import { useContext, useState } from "react";
import {
  ITask,
  TodoContextType,
  TodolistContext,
} from "../context/todolistContext";
const TaskItem = ({ taskData }: { taskData: ITask }) => {
  const { toggler, deleteTask, editTodo } = useContext(
    TodolistContext
  ) as TodoContextType;
  const { id, text, completed } = taskData;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  return (
    <>
      {!isEditing ? (
        <div
          onClick={() => toggler(id)}
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {text}
        </div>
      ) : (
        <input
          type="text"
          value={text}
          onChange={(e) => editTodo(id, e.target.value)}
        />
      )}
      <button onClick={() => deleteTask(id)}>Delete</button>
      <button onClick={() => setIsEditing((prev) => !prev)}>Edit Task</button>
    </>
  );
};

export default TaskItem;
