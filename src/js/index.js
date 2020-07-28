import '../scss/main.scss';

/* place your code below */

const textarea = document.querySelector('.textarea--js');
const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');


save.addEventListener('click', () => {
  localStorage.setItem('entry', textarea.value);  
})
