const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('right');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});
