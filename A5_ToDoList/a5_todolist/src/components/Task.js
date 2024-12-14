import React from 'react';
import '../styles/Task.css';

function Task({ task, onToggleComplete, onDelete }) {
  return (
    <div className="task">
      {/* 五角星点击事件切换任务完成状态 */}
      <span 
        className={`star ${task.completed ? 'completed' : ''}`} 
        onClick={() => onToggleComplete(task.id)}
      >
        ★
      </span>

      {/* 任务文字，根据状态动态添加横线 */}
      <span className={task.completed ? 'completed-text' : ''}>
        {task.title}
      </span>

      {/* 删除按钮 */}
      <button onClick={() => onDelete(task.id)}>删除</button>
    </div>
  );
}

export default Task;
