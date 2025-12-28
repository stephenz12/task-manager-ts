import { useTasks } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const { tasks } = useTasks();

  return (
    <div>
      <h1>Task Management App</h1>

      <TaskForm />

      <h2>Tasks</h2>
      <TaskList />

      <p>Total tasks: {tasks.length}</p>
    </div>
  );
}

export default App;
