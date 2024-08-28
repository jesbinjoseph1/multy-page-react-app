// import React, { useState } from 'react';

// const Todo = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   // Function to add a new task to the list
//   const addTask = () => {
//     if (newTask) {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   // Function to delete a task from the list
//   const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   // Function to toggle the completed state of a task
//   const toggleTask = (index) => {
//     const updatedTasks = tasks.map((task, i) => 
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//         placeholder="Add a new task"
//         className="form-control mb-2"
//       />
//       <button onClick={addTask} className="btn btn-primary mb-3">Add Task</button>
//       <ul className="list-group">
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}
//           >
//             <span>
//               <button onClick={() => toggleTask(index)}
//               className={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}>Done</button>
            
//               {task.text}
//             </span>
//             <button onClick={() => deleteTask(index)} className="btn btn-danger btn-sm">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todo;


import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to add a new task to the list
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to delete a task from the list
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Function to mark a task as completed
  const markAsDone = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="form-control mb-2"
      />
      <button onClick={addTask} className="btn btn-primary mb-3">Add Task</button>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}
          >
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <div>
              {!task.completed && (
                <button
                  onClick={() => markAsDone(index)}
                  className="btn btn-success btn-sm mr-2"
                >
                  Done
                </button>
              )}
              <button onClick={() => deleteTask(index)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
