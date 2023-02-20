// 1 Отримати посилання на елемент
const validationInputEl = document.querySelector('#validation-input');

// 2 Додати функцію, яка видаляє класи зі стилями під час взаємодії з елементом
const onValidationInputElEnter = () => {
	validationInputEl.classList.remove('valid');
	validationInputEl.classList.remove('invalid');
};

// 3 Додати функцію, яка валідує довжину введеного значення
// і додає потрібний клас зі стилями під час втрати фокусу над елементом
const onValidationInputBlur = event => {
	event.currentTarget.value.trim().length === Number(validationInputEl.dataset.length)
		? validationInputEl.classList.add('valid')
		: validationInputEl.classList.add('invalid');
};

// 4 Додати слухачів подій
validationInputEl.addEventListener('input', onValidationInputElEnter);
validationInputEl.addEventListener('blur', onValidationInputBlur);
