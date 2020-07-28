import '../scss/main.scss';

/* place your code below */

const textarea = document.querySelector('.textarea--js');
const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');


save.addEventListener('click', (e) => {
    e.preventDefault();
  localStorage.setItem('entry', textarea.value);  
})

load.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem('entry');
})