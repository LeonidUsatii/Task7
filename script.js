const t = setInterval(moveForward, 20);
let pos = 0; 
const box = document.getElementById('box');

function moveForward() {
  if (pos != 150) {
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    pos++;
  } else {
    const t = setInterval(moveBack, 20);
  }
}

function moveBack() {
  if (pos != 0) {
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    pos--;
  } else {
    const t = setInterval(moveForward, 20);
  }
}
