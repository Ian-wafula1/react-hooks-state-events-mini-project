import React, { useContext } from "react";
import Task from './Task.js'
import { CategoryContext } from "../context/category.js";

function TaskList({tasks, setTasks}) {
  function deleteTask(id) {
    setTasks(tasks.filter(task => {
      return task.id !== id
    }))
  }

  console.log(useContext(CategoryContext))
  const selectedCategory = useContext(CategoryContext).selectedCategory
  console.log(selectedCategory)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks
      .filter(task => {
        if (selectedCategory === 'All') return true
        return task.category === selectedCategory
      } )
      .map((task) => {
        return <Task deleteTask={deleteTask} id={task.id} key={task.id} category={task.category} text={task.text} />
      })}
    </div>
  );
}

export default TaskList;
