const listEl = document.querySelector('#categories');

const allCategories = [...listEl.children];
console.log('Number of categories: ', allCategories.length);

allCategories.forEach(category => {
	const titleOfCategoryEl = category.firstElementChild;
	console.log('Category: ', titleOfCategoryEl.textContent);

	const listOfCategoryElementsEl = category.lastElementChild;

	const itemOfCategoryElementsEl = listOfCategoryElementsEl.children;
	console.log('Elements: ', itemOfCategoryElementsEl.length);
});
