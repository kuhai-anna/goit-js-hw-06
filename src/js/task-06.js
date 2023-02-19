// 1 Отримати посилання на елемент
const inputEl = document.querySelector('#validation-input');

// 2 Додати функцію, яка видаляє класи зі стилями під час взаємодії з елементом
const removeInputElClasses = () => {
	inputEl.classList.remove('valid');
	inputEl.classList.remove('invalid');
};

// 3 Додати функцію, яка додає потрібний клас зі стилями під час втрати фокусу над елементом
const changeInputElColor = event => {
	event.currentTarget.value.length === Number(inputEl.dataset.length)
		? inputEl.classList.add('valid')
		: inputEl.classList.add('invalid');
};

// 4 Додати слухачів подій
inputEl.addEventListener('input', removeInputElClasses);
inputEl.addEventListener('blur', changeInputElColor);
