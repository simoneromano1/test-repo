let display = document.getElementById('display');

// Funzione per gestire input dei numeri
function addDigit(digit) {
  if (display.value === '0') {
    display.value = digit;
  } else {
    display.value += digit;
  }
}

// Funzione per gestire input degli operatori
function addOperator(operator) {
  if (display.value === '0') {
    display.value = operator;
  } else {
    display.value += operator;
  }
}

// Aggiunge event listener ai pulsanti numerici
const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
digits.forEach((id, index) => {
  const digit = index.toString();
  document.getElementById(id).addEventListener('click', () => addDigit(digit));
});

// Aggiunge event listener agli operatori
const operators = [
  { id: 'add', symbol: '+' },
  { id: 'subtract', symbol: '-' },
  { id: 'multiply', symbol: '*' },
  { id: 'divide', symbol: '/' },
];
operators.forEach((op) => {
  document.getElementById(op.id).addEventListener('click', () => addOperator(op.symbol));
});

// Gestione del pulsante Clear
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  display.value = clear.value;
});

// Gestione del pulsante Backspace
let backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

// Gestione del pulsante Equals
let equals = document.getElementById('equals');
equals.addEventListener('click', () => {
  if (display.value !== '0') {
    display.value = eval(display.value);
  }
});

// Gestione del punto decimale
let dot = document.getElementById('dot');
dot.addEventListener('click', () => {
  if (!display.value.includes('.')) {
    if (display.value === '0') {
      display.value = '0.';
    } else {
      display.value += '.';
    }
  }
});
