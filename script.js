'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let btn in showModalBtn) {
  showModalBtn[btn].addEventListener('click', openModal);
  overlay.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', closeModal);
}
