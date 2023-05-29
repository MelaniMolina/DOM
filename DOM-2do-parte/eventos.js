/* EVENTOS DEL DOM  */
//Link de la Pagina a Modificar 
//https://www.viki.com/tv/39658c-romance-of-a-twin-flower

// Evento - click

const elemento = document.querySelector('.navbar');

if (elemento !== null) {
  const button = document.createElement('button');
  button.innerText = 'Hello React';
  elemento.appendChild(button);

  button.addEventListener('click', function() {
    alert('Abrir Popup');
  });
} else {
  console.log('El elemento no se encontró');
}
// ________________________________________________________________________

// Evento - mouseout

// const elemento = document.querySelector('.navbar-end.navbar-flex.right');

// if (elemento !== null) {
//   elemento.addEventListener('mouseenter', function() {
//     elemento.style.border = '3px double blue';
//   });

//   elemento.addEventListener('mouseout', function() {
//     elemento.style.border = '';
//   });
// } else {
//   console.log('El elemento no se encontró');
// }

// __________________________________________________________________________

// Evento - input

// const navbarSearch = document.querySelector('.navbar-search');
// const searchInput = navbarSearch.querySelector('#searchInput');

// navbarSearch.addEventListener('input', function(e) {
//   if (searchInput.value === "") {
//     navbarSearch.style.border = '2px solid red';
//   } else {
//     navbarSearch.style.border = '';
//     console.log(searchInput.value);
//   }
// });

// _______________________________________________________________________________


// const elemento = document.querySelector('.page-footer-social.clearfix');

// if (elemento !== null) {
//   elemento.addEventListener('click', (e) => {
//     if (e.target.tagName === "A") {
//       e.preventDefault();
//       console.log("Hiciste clic en un enlace dentro de la clase page-footer-social clearfix");
//     }
//   });
// } else {
//   console.log('El elemento no se encontró');
// }
