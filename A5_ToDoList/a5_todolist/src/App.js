import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]); // 任务列表状态
  const [filter, setFilter] = useState("all"); // 过滤条件状态

  // 添加任务
  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  // 切换任务完成状态
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 删除任务
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 根据过滤条件筛选任务
  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed; // 已完成
    if (filter === "incomplete") return !task.completed; // 未完成
    return true; // 全部
  });

  return (
    <div className="App">
      <h1>任务列表</h1>

      {/* 输入框和筛选器容器 */}
      <div 
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}
      >
        {/* 使用 TaskInput 组件 */}
        <TaskInput onAddTask={addTask} />

        {/* 筛选器部分 */}
        <div 
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <label 
            htmlFor="filter-select"
            style={{
              marginRight: "5px",
              fontWeight: "bold"
            }}
          >
            筛选任务：
          </label>
          <select
            id="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              cursor: "pointer"
            }}
          >
            <option value="all">全部</option>
            <option value="completed">已完成</option>
            <option value="incomplete">未完成</option>
          </select>
        </div>
      </div>

      {/* 任务列表 */}
      <TaskList
        tasks={filteredTasks} // 传递过滤后的任务列表
        onToggleComplete={toggleTaskCompletion}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
