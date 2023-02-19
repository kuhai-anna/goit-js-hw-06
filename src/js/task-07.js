// 1 Отримати посилання на елементи
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

console.log(inputEl);
console.log(textEl);

// 2 Дадати функцію, яка змінює розмір шрифта
const changeFontSize = event => {
	textEl.style.fontSize = `${event.currentTarget.value}px`;
};

// 3 Додати слухача подій
inputEl.addEventListener('input', changeFontSize);
