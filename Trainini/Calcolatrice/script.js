const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let current = '';
let resetNext = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            current = '';
            display.textContent = '0';
        } else if (value === '=') {
            try {
                let expression = current.replace(/×/g, '*').replace(/÷/g, '/');
                current = eval(expression).toString();
                display.textContent = current;
                resetNext = true;
            } catch (e) {
                display.textContent = 'Errore';
                current = '';
            }
        } else if (['+', '-', '×', '/'].includes(value)) {
            if (resetNext) resetNext = false;
            current += ' ' + value + ' ';
            display.textContent = current;
        } else {
            if (resetNext) {
                current = '';
                resetNext = false;
            }
            current += value;
            display.textContent = current;
        }
    });
});
