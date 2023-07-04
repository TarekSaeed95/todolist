import {  ReactNode, createContext, useState } from "react";
export interface ITask {
  id: number;
  text: string;
  completed: boolean;
}
export type TodoContextType = {
  todoList: ITask[] | undefined;
  saveTodo: (task: string) => void;
  editTodo: (id: number, text: string) => void;
  toggler: (id: number) => void;
  deleteTask: (id: number) => void;
};
export const TodolistContext = createContext<TodoContextType | null>(null);
const TodoListProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState<ITask[]>([
    { id: 0, completed: false, text: "first task" },
  ]);
  const saveTodo = (task: string) => {
    const newTodo: ITask = {
      id: Math.random(),
      text: task,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
  };
  const editTodo = (id: number, text: string) => {
    setTodoList((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, text: text };
        }
        return task;
      })
    );
    console.log(todoList);
  };
  const toggler = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTask = (id: number) => {
    setTodoList([...todoList.filter((todo) => todo.id !== id)]);
  };
  return (
    <TodolistContext.Provider
      value={{ todoList, saveTodo, editTodo, toggler, deleteTask }}
    >
      {children}
    </TodolistContext.Provider>
  );
};
export default TodoListProvider;
