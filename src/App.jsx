import React, { useEffect, useState } from 'react';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value.charAt(0).toUpperCase() + value.slice(1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const addTask = () => {
    if (inputValue.trim() === '') {
      return;
    }
    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className='main-div'>
      <div className='todo-list'>
        <div className='todo-button'>
          <h1 className='todo-h1'>TODO LIST</h1>
          <button onClick={addTask} className='add-task-btn'>Add Task</button>
          <button onClick={clearAll} className='add-task-btn'>Clear all</button>
        </div>
        <input
          placeholder='Add Task...'
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          type="text"
          className='input-box'
        />
        <ul className='ul-list'>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <FontAwesomeIcon
                icon={faTrash}
                className='icon'
                onClick={() => removeTask(index)}
                style={{ cursor: 'pointer', marginLeft: '10px' }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
