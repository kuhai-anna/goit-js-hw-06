const inputEl = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const onInputEnter = event => {
	event.currentTarget.value.trim() === ''
		? (output.textContent = 'Anonymous')
		: (output.textContent = event.currentTarget.value);
};

inputEl.addEventListener('input', onInputEnter);
