const inputEl = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const handleEnter = event => {
	if (event.currentTarget.value === '') {
		return (output.textContent = 'Anonymous');
	}
	return (output.textContent = event.currentTarget.value);
};

inputEl.addEventListener('input', handleEnter);
