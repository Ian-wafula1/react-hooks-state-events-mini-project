import React, { useState } from 'react';
import { v4 } from 'uuid';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: '',
    category: 'Code'
  })

  function handleInputChange(e) {
    const {name, value} = e.target
    setFormData({
      ...formData, 
      [name]: value
    })
  }
	return (
		<form className="new-task-form" onSubmit={(e) => onTaskFormSubmit(e, {...formData, id: v4()})}>
			<label>
				Details
				<input type="text" name="text" value={formData.text} onChange={handleInputChange} />
			</label>
			<label>
				Category
				<select name="category" value={formData.category} onChange={handleInputChange}>
					{categories.slice(1).map((category) => {
            return <option key={category}>{category}</option>
          })}
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	);
}

export default NewTaskForm;
