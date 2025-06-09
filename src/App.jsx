import React, { useState } from "react";
import TaskList from "./tasklist";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, done: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const handleToggleDone = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">My To-Do List</h1>
        <div className="flex gap-2 mb-4 justify-center">
          <input
            className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 max-w-md"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
        <TaskList tasks={tasks} onToggle={handleToggleDone} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
