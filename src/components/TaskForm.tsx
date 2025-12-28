import { useState } from "react";
import { Task } from "../types/Task";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status: "todo",
    };

    addTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
