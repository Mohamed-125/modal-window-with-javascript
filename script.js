'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

// buttons to show the modal
// loop on every btn and add event listener
showModalBtns.forEach(item =>
  item.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);

// button to close the modal

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// to close the modal on click on the overlay

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// to close the modal when preesing on the esc btn

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
  console.log(e);
});
