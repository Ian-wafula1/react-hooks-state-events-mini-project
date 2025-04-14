import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
// import { CategoryProvider } from '../context/category';

import { CATEGORIES, TASKS } from '../data';

function App() {
	const [tasks, setTasks] = useState(TASKS);
	const [selectedCategory, setSelectedCategory] = useState('All')

	function onTaskFormSubmit(newTask) {
		setTasks([...tasks, newTask]);
	}

	function onDelete(id) {
		setTasks(tasks.filter(task => {
			return task.id !== id
		  }))
	}
	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={CATEGORIES} />
			<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
			<TaskList tasks={tasks} onDelete={onDelete} selectedCategory={selectedCategory}/>
		</div>
	);
}

export default App;
