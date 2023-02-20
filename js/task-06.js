// 1 Отримати посилання на елемент
const inputEl = document.querySelector('#validation-input');

// 2 Додати функцію, яка видаляє класи зі стилями під час взаємодії з елементом
const inputElEnterHendler = () => {
	inputEl.classList.remove('valid');
	inputEl.classList.remove('invalid');
};

// 3 Додати функцію, яка валідує довжину введеного значення
// і додає потрібний клас зі стилями під час втрати фокусу над елементом
const inputElBlurHendler = event => {
	event.currentTarget.value.trim().length === Number(inputEl.dataset.length)
		? inputEl.classList.add('valid')
		: inputEl.classList.add('invalid');
};

// 4 Додати слухачів подій
inputEl.addEventListener('input', inputElEnterHendler);
inputEl.addEventListener('blur', inputElBlurHendler);
