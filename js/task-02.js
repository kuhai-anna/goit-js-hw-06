const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const itemsEl = ingredients.map(ingredient => {
	const ingredientEl = document.createElement('li');
	ingredientEl.textContent = ingredient;
	ingredientEl.classList.add('item');

	return ingredientEl;
});

listEl.append(...itemsEl);

console.log(listEl);
