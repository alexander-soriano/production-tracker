let dragged = null;

document.addEventListener("dragstart", event => {
  // store a ref. on the dragged elem
  dragged = event.target;
  dragged.style.opacity='0.4'

  

});

document.addEventListener("dragend", event => {
  
  event.target.style.removeProperty('opacity')
});

document.addEventListener("dragover", event => {
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
    dragged.style.removeProperty('width');
    
    dragged.style.position=`relative`
    dragged.style.width=`${dragged.dataset.manday*100}px`
  }
});

// addDays function
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

var currentDate = new Date();
var range = 120;
var daysParent = document.querySelector('.days')
var monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysArr = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]

for (i=0; i<range; i++){
  loopDate = currentDate.addDays(i);
  var cell = document.createElement('div');
  dateMonth = monthsArr[loopDate.getMonth()];
  dateDate = loopDate.getDate();
  dateDay = daysArr[loopDate.getDay()];
  dateString = `${dateMonth} ${dateDate} ${dateDay}`
  cell.textContent=`${dateString}`

  daysParent.appendChild(cell)
}

// create cells function
const days = document.querySelectorAll('.days div');
const foreman = document.querySelectorAll('.foreman>div');
const table = document.querySelector('.table');

for (i=0; i<days.length*foreman.length; i++) {
  const cell = document.createElement('div')
  cell.setAttribute('class','cell')
  cell.setAttribute('data-index',`${i}`)
  table.appendChild(cell) 
}


