let dragged = null;

document.addEventListener("dragstart", event => {
  // store a ref. on the dragged elem
  dragged = event.target;
});

document.addEventListener("dragover", event => {
  // prevent default to allow drop
  event.preventDefault();
});

document.addEventListener("drop", event => {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  event.stopPropagation();
  // move dragged element to the selected drop target
  if (event.target.className == "table" && dragged.className == 'item') {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
  return false
});