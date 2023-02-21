// 1 Отримати посилання на елементи
const controlInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

console.log(controlInputEl);
console.log(textEl);

// 2 Додати слухача подій
controlInputEl.addEventListener('input', onControlInputElnter);

// 3 Дадати функцію, яка змінює розмір шрифта
function onControlInputElnter(event) {
	textEl.style.fontSize = `${event.currentTarget.value}px`;
}

// // 2 Дадати функцію, яка змінює розмір шрифта
// const onControlInputElnter = event => {
// 	textEl.style.fontSize = `${event.currentTarget.value}px`;
// };

// // 3 Додати слухача подій
// inputEl.addEventListener('input', onControlInputElnter);
