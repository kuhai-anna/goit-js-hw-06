// 1 Отримати посилання на форму
const formEl = document.querySelector('.login-form');

// 2 Додати функцію обробки відправлення форми
const handleSubmit = event => {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

	if (email === '' || password === '') {
		alert('Please fill in all the fields!');
	} else {
		const result = {
			email,
			password,
		};

		console.log(result);
		formEl.reset();
	}
};

// 3 Додати слухачів подій
formEl.addEventListener('submit', handleSubmit);
