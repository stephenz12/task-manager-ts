import { useState } from "react";
import { Task } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div>
      <h1>Task Management App</h1>
      <p>Total tasks: {tasks.length}</p>
    </div>
  );
}

export default App;
