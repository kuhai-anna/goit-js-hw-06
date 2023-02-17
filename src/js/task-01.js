const listEl = document.querySelector('#categories');

const allCategories = [...listEl.children];

console.log('Number of categories: ', allCategories.length);

allCategories.forEach(category => {
	console.log('Category: ', category.firstElementChild.textContent);

	const listOfCategoryElementsEl = category.lastElementChild;

	console.log('Elements: ', listOfCategoryElementsEl.children.length);
});
