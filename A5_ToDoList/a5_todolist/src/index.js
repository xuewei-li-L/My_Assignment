import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//渲染
root.render(
  // 自定义组件，严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

