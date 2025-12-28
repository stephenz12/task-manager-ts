import { useTasks } from "./context/TaskContext";

function App() {
  const { tasks } = useTasks();

  return (
    <div>
      <h1>Task Management App</h1>
      <p>Total tasks: {tasks.length}</p>
    </div>
  );
}

export default App;
