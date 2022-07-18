let body = document.querySelector('body');
let brg = document.querySelector('.brg');
let header = document.querySelector('.header');
let dropLinks = document.querySelectorAll('.menu-drop__link');

brg.addEventListener('click', () => {
  brg.classList.toggle('open');
  header.classList.toggle('open');
  body.classList.toggle('lock');
});

header.addEventListener('click', () => {
  if (event.target === header) {
    brg.classList.remove('open');
    header.classList.remove('open');
    body.classList.remove('lock');
  }
})

// for (let link of dropLinks) {
//   link.addEventListener('click', () => {
//     brg.classList.remove('open');
//     menuDrop.classList.remove('open');
//     body.classList.remove('lock');
//   })
// }

