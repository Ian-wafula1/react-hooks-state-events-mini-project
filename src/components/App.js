import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import { CategoryProvider } from '../context/category';

import { CATEGORIES, TASKS } from '../data';

function App() {
	const [tasks, setTasks] = useState(TASKS);

  function onTaskFormSubmit(e, newTask) {
    e.preventDefault()
    setTasks([...tasks, newTask])
  }
	return (
		<div className="App">
			<CategoryProvider>
				<h2>My tasks</h2>
				<CategoryFilter categories={CATEGORIES} />
				<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
				<TaskList setTasks={setTasks} tasks={tasks} />
			</CategoryProvider>
		</div>
	);
}

export default App;
