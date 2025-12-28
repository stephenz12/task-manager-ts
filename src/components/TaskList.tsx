import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Task } from "../types/Task";

function TaskList() {
  const { tasks, deleteTask, updateTask } = useTasks();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setTitle(task.title);
  };

  const saveEdit = (task: Task) => {
    updateTask({ ...task, title });
    setEditingId(null);
  };

  if (tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editingId === task.id ? (
            <>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
              <button onClick={() => saveEdit(task)}>Save</button>
            </>
          ) : (
            <>
              <strong>{task.title}</strong> — {task.status}
              <button onClick={() => startEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
