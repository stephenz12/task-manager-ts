import { useTasks } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.title}</strong> — {task.status}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
