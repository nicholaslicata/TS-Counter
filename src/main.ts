import './style.css'

const addBtn = document.querySelector('.add-btn') as HTMLButtonElement;
const minusBtn = document.querySelector('.minus-btn') as HTMLButtonElement;
const countDisplay = document.querySelector('.count-display') as HTMLSpanElement;;

let count = 0;

addBtn?.addEventListener('click', add);
minusBtn?.addEventListener('click', minus)

function add() {
  count++;
  let countString = String(count);
  countDisplay.textContent = countString;
}

function minus() {
  count--;
  let countString = String(count);
  countDisplay.textContent = countString;
}

