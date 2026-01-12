// Generate random hex color
function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId = null;

function changeBgColor() {
  const color = randomColor();
  document.body.style.backgroundColor = color;
  document.getElementById('currentColor').textContent = `Current Color: ${color}`;
}

function startChangingColor() {
  if (!intervalId) {
    // Immediately change color
    changeBgColor();
    // Then set interval
    intervalId = setInterval(changeBgColor, 1000);
  }
}

function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);
