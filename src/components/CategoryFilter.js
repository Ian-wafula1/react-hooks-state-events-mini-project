import React, { useContext } from 'react';
import { CategoryContext } from '../context/category';

function CategoryFilter({ categories }) {
	const {selectedCategory, setSelectedCategory} = useContext(CategoryContext)
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{categories.map((category) => {
				return (
					<button onClick={() => setSelectedCategory(category)} key={category} className={selectedCategory=== category ? 'selected' : ''}>
						{category}
					</button>
				);
			})}
		</div>
	);
}

export default CategoryFilter;
