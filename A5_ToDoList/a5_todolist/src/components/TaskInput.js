import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      onAddTask(input.trim());
      setInput('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="请输入任务"
      />
      <button onClick={handleAddTask}>添加</button>
    </div>
  );
}

export default TaskInput;
