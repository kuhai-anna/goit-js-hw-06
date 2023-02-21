const inputEl = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputEnter);

function onInputEnter(event) {
	event.currentTarget.value.trim() === ''
		? (output.textContent = 'Anonymous')
		: (output.textContent = event.currentTarget.value);
}

// const onInputEnter = event => {
// 	event.currentTarget.value.trim() === ''
// 		? (output.textContent = 'Anonymous')
// 		: (output.textContent = event.currentTarget.value);
// };

// inputEl.addEventListener('input', onInputEnter);
