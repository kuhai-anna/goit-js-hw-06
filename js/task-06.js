// 1 Отримати посилання на елемент
const validationInputEl = document.querySelector('#validation-input');

// 2 Додати слухачів подій
validationInputEl.addEventListener('input', onValidationInputElEnter);
validationInputEl.addEventListener('blur', onValidationInputBlur);

// 3 Додати функцію, яка видаляє класи зі стилями під час взаємодії з елементом
function onValidationInputElEnter() {
	validationInputEl.classList.remove('valid');
	validationInputEl.classList.remove('invalid');
}

// 4 Додати функцію, яка валідує довжину введеного значення
// і додає потрібний клас зі стилями під час втрати фокусу над елементом
function onValidationInputBlur(event) {
	if (event.currentTarget.value.trim().length !== Number(validationInputEl.dataset.length)) {
		validationInputEl.classList.add('invalid');
	} else {
		validationInputEl.classList.add('valid');
	}
}

// // 2 Додати функцію, яка видаляє класи зі стилями під час взаємодії з елементом
// const onValidationInputElEnter = () => {
// 	validationInputEl.classList.remove('valid');
// 	validationInputEl.classList.remove('invalid');
// };

// // 3 Додати функцію, яка валідує довжину введеного значення
// // і додає потрібний клас зі стилями під час втрати фокусу над елементом
// const onValidationInputBlur = event => {
// 	if (event.currentTarget.value.trim().length === Number(validationInputEl.dataset.length)) {
// 		validationInputEl.classList.add('valid');
// 	} else {
// 		validationInputEl.classList.add('invalid');
// 	}
// };

// // 4 Додати слухачів подій
// validationInputEl.addEventListener('input', onValidationInputElEnter);
// validationInputEl.addEventListener('blur', onValidationInputBlur);
