import { FC, ReactNode, useContext } from "react";
import TaskItem from "./TaskItem";
import { TodoContextType, TodolistContext } from "../context/todolistContext";
const Tasks: FC = () => {
    const { todoList } = useContext(TodolistContext) as TodoContextType;
    const taskElement:ReactNode= todoList?.map((task) => <TaskItem key={task.id} taskData={task} />);
  return <div className="todoList">{taskElement}</div>;
};

export default Tasks;
