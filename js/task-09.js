// function getRandomHexColor() {
// 	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

// 1 Отримати посилання на елементи
const bodyEl = document.querySelector('body');
const textColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

// 2 Додати функцію, яка змінює колір фону
const changeColorButtonClickHendler = () => {
	const color = getRandomHexColor();
	bodyEl.style.backgroundColor = color;
	textColorEl.textContent = color;
};

// 3 Додати слухачів подій
changeColorBtn.addEventListener('click', changeColorButtonClickHendler);
