import { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

const TodoApp = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (title) => {
    const newTask = {
      _id: Date.now().toString(),
      title,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task._id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task._id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TaskForm onAdd={addTask} />
      <div className="space-y-2">
        {tasks.map(task => (
          <TaskItem 
            key={task._id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoApp
