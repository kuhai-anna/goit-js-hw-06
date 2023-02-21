// 1 Отримати посилання на форму
const loginFormEl = document.querySelector('.login-form');

// 2 Додати слухачів подій
loginFormEl.addEventListener('submit', onLoginFormElSubmit);

// 3 Додати змінну, яка буде зберігати дані з форми
const formData = {};

// 4 Додати функцію обробки відправлення форми
function onLoginFormElSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

	if (email === '' || password === '') {
		alert('Please fill in all the fields!');
	} else {
		formData.email = email;
		formData.password = password;

		// const formData = {
		// 	email,
		// 	password,
		// };

		console.log(formData);
		loginFormEl.reset();
	}
}

// // 2 Додати функцію обробки відправлення форми
// const onLoginFormElSubmit = event => {
// 	event.preventDefault();

// 	const formElements = event.currentTarget.elements;
// 	const email = formElements.email.value;
// 	const password = formElements.password.value;

// 	if (email === '' || password === '') {
// 		alert('Please fill in all the fields!');
// 	} else {
// 		const result = {
// 			email,
// 			password,
// 		};

// 		console.log(result);
// 		formEl.reset();
// 	}
// };

// // 3 Додати слухачів подій
// formEl.addEventListener('submit', onLoginFormElSubmit);
