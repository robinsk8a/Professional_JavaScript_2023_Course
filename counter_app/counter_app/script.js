const counterEl = document.querySelector('.counter')
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrese');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector(.counter__title);

function incrementContent () {
    const currentValue = +counterValueEl.textContent;
    let newValue = currentValue + 1
    if (newValue > 5) {
        newValue = 5;
        counterEl.classList.add('counter--limit')
        counterTitleEl.textContent = 'Limit reach! Buy pro for more fun'
    };
    counterValueEl.textContent = newValue
};

increaseButtonEl.addEventListener('click', incrementContent);
document.addEventListener('keydown', incrementContent);

decreaseButtonEl.addEventListener('click', function() {
    const currentValue = +counterValueEl.textContent;
    let newValue = currentValue - 1;
    if (newValue < 0) {
        newValue = 0;
    };
    counterValueEl.textContent = newValue;
});

resetButtonEl.addEventListener('click', function() {
    counterValueEl.textContent = 0;
})