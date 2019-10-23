import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'

//容器组件/UI组件(展示组件)
// 智能组件/木偶组件

//容器组件(container/pages)：逻辑、功能、页面
// UI组件（components）：展示，返回React元素

ReactDOM.render(
    <App />,
    document.getElementById('root')
)