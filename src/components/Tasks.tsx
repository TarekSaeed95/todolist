import { FC, useContext } from "react";
import TaskItem from "./TaskItem";
import { TodoContextType, TodolistContext } from "../context/todolistContext";
const Tasks: FC = () => {
  const { todoList } = useContext(TodolistContext) as TodoContextType;
  return todoList?.map((task) => <TaskItem key={task.id} taskData={task} />);
};

export default Tasks;
