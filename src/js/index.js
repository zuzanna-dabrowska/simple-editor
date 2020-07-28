import '../scss/main.scss';



const textarea = document.querySelector('.textarea--js');
const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');
const clear = document.querySelector('.clear--js');

save.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('entry', textarea.value);
})

load.addEventListener('click', (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem('entry');
});

clear.addEventListener('click', () => {
  localStorage.removeItem('entry')
})