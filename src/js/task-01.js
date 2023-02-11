const listEl = document.querySelector('#categories');

const allCategories = listEl.children;
console.log('Number of categories: ', allCategories.length);

for (let i = 0; i < allCategories.length; i += 1) {
	const titleOfCategoryEl = allCategories[i].firstElementChild;
	console.log('Category: ', titleOfCategoryEl.textContent);

	const listOfCategoryElementsEl = allCategories[i].lastElementChild;

	const itemOfCategoryElementsEl = listOfCategoryElementsEl.children;
	console.log('Elements: ', itemOfCategoryElementsEl.length);
}
