import { useState } from 'react';
import InputTask from './InputTask.js';
import Task from './Task.js';

function App() {
  const [tasks, setTask] = useState([]);            // состояние (массив задач)
  
  const newTask = (userTask) => {
    if (userTask) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 8),
        textTask: userTask,
        complete: false,
      }
      setTask([...tasks, newItem]);
    }
  }

  const deleteTask = (id) => {
    setTask([...tasks.filter((task) => !(task.id === id))]);
  }

  const toggleTask = (id) => {
    setTask([...tasks.map(task => task.id === id ? {...task, complete: !task.complete} : {...task})]);
  }

  return (
    <div className="App">
      <InputTask newTask={newTask} />
      {tasks.map((task) => {
        console.log(task);
        return (
          <Task
            task={task}
            key={task.id}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        )
      })}
    </div>
  );
}

export default App;
