let display = document.getElementById('display');

function appendValue(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = 'Errore';
  }
}

function rickroll() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}