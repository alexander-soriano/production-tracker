let dragged = null;

document.addEventListener("dragstart", event => {
  // store a ref. on the dragged elem
  dragged = event.target;
  dragged.style.opacity='0.4'
});

document.addEventListener("dragover", event => {
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener("dragenter", event => {
  if (event.target.className=='cell') {
    event.target.style.border='3px dotted #666'
  };
});

document.addEventListener("dragleave", event => {
  if (event.target.className=='cell') {
    event.target.style.removeProperty('border')
  };
});

document.addEventListener("drop", event => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  event.stopPropagation();
  // move dragged element to the selected drop target
  if (event.target.className == "cell" && dragged.className == 'item') {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    event.target.style.removeProperty('border')
    dragged.style.opacity='1'
  }
});

const days = document.querySelectorAll('.days>div')
const foreman = document.querySelectorAll('.foreman>div')
const table = document.querySelector('.table')

for (i=0; i<days.length*foreman.length; i++) {
  const cell = document.createElement('div')
  cell.setAttribute('class','cell')
  table.appendChild(cell) 
}