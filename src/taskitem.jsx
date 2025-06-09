 import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded mb-2 shadow-sm">
      <span
        className={`flex-1 ${
          task.done ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.text}
      </span>
      <div className="flex gap-2 ml-2">
        <button
          className="text-green-600 hover:text-green-800"
          onClick={() => onToggle(task.id)}
        >
          ✔
        </button>
        <button
          className="text-red-600 hover:text-red-800"
          onClick={() => onDelete(task.id)}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
