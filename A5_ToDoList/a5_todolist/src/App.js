import React, { useState } from 'react';
import './App.css'; 
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]); 
  const [filter, setFilter] = useState("all"); 


  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };


  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 筛选
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed; 
    if (filter === "incomplete") return !task.completed; 
    return true; 
  });

  return (
    <div className="App">
      <h1>任务列表</h1>


      <div className="task-container">
 
        <TaskInput onAddTask={addTask} />

        <div className="task-filter">
          <label htmlFor="filter-select">筛选任务：</label>
          <select
            id="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">全部</option>
            <option value="completed">已完成</option>
            <option value="incomplete">未完成</option>
          </select>
        </div>
      </div>

      <TaskList
        tasks={filteredTasks} 
        onToggleComplete={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
