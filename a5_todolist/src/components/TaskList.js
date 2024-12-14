import React from 'react';
import Task from './Task';

function TaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task 
          key={task.id}  // React 要求每个列表项有唯一的 key
          task={task}    // 将单个任务对象传递给子组件 Task
          onToggleComplete={onToggleComplete}  // 传递状态切换函数
          onDelete={onDelete}  // 传递删除函数
        />
      ))}
    </div>
  );
}

export default TaskList;
