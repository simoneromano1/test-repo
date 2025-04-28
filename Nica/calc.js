const display = document.querySelector('.display'); 
const buttons = document.querySelectorAll('.button'); 

let currentInput = '';
let previousInput = '';
let operator = null;

display.value = '0';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            display.value = `${previousInput} ${operator || ''} ${currentInput}`;
        } else if (button.classList.contains('operator')) {
            if (value === '=') {
                if (operator && previousInput && currentInput) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.value = currentInput;
                    operator = null;
                    previousInput = '';
                }
            } else {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                }
                operator = value;
                display.value = `${previousInput} ${operator}`;
            }
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.value = '';
            display.value = '0';
        }
    });
});

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            return b !== 0 ? (a / b).toString() : 'Error';
        default:
            return '';
    }
}