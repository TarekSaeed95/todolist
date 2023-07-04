import { FC } from "react"
import Controller from "./components/Controller"
import Tasks from "./components/Tasks"
import TodoListProvider from "./context/todolistContext"


const App :FC = () => {
  return (
    <main>  
      <TodoListProvider>
      <Controller/>
      <Tasks/>
      </TodoListProvider>
    </main>
  )
}

export default App
