const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id)}
        />
        <span className={`ml-2 ${task.completed ? "line-through" : ""}`}>
          {task.title}
        </span>
      </div>
      <button onClick={() => onDelete(task._id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
