import React from "react";
import Task from './Task.js'
// import { CategoryContext } from "../context/category.js";

function TaskList({ selectedCategory, tasks, onDelete}) {
  // function deleteTask(id) {
  //   setTasks(tasks.filter(task => {
  //     return task.id !== id
  //   }))
  // }

  // const [tasks, setTasks] = useState(TASKS);

  let displayedTasks
  if (selectedCategory === 'All' || !selectedCategory) {
    displayedTasks = tasks
  } else{
    displayedTasks = tasks.filter(task => {
      if (selectedCategory === 'All') return true
      return task.category === selectedCategory
    })
  }
  
  // console.log(useContext(CategoryContext))
  // const selectedCategory = useContext(CategoryContext).selectedCategory
  // console.log(selectedCategory)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayedTasks
      .map((task) => {
        return <Task deleteTask={e => onDelete(task.id)} id={task.id} key={task.id} category={task.category} text={task.text} />
      })}
    </div>
  );
}

export default TaskList;
