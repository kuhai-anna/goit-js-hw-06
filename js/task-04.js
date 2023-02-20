// 1 Отримати посилання на елементи
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const valueEl = document.querySelector('#value');

// 2 Створити та ініціалізувати змінну, яка зберігає значення лічильника
// Інтерфейс оновлюється новим значенням змінної
let counterValue = 0;
valueEl.textContent = counterValue;

// 3 Створити іменовані функції для виконання дій:
// додавання та віднімання, зміни значення лічильника
const removeOnClick = () => {
	counterValue -= 1;

	valueEl.textContent = counterValue;
};

const sumOnClick = () => {
	counterValue += 1;

	valueEl.textContent = counterValue;
};

// 4 Додати слухачів подій для кнопок
decrementBtn.addEventListener('click', removeOnClick);
incrementBtn.addEventListener('click', sumOnClick);
