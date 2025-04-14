import React from 'react';
// import { CategoryContext } from '../context/category';

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
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
