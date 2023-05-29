
/* AGREGAR ELEMENTOS DOM  */
//Link de la Pagina a Modificar 
//https://www.viki.com/tv/39658c-romance-of-a-twin-flower

//Nuevo parrafo dentro del sitio web
const elemento = document.querySelector('.sc-1qgd66y-1.hQnWka');

if (elemento !== null) {
  const parrafo = document.createElement('p');
  parrafo.textContent = 'Este es un nuevo párrafo';

  elemento.appendChild(parrafo);
} else {
  console.log('El elemento no se encontró');
}

//Implementacion de dos botonoes
// const elemento = document.querySelector('.sc-1qmvf1o-6.kKDaJr');

// if (elemento !== null) {
//   const boton1 = document.createElement('button');
//   boton1.textContent = 'Botón 1';
//   boton1.style.backgroundColor = 'pink';

//   const boton2 = document.createElement('button');
//   boton2.textContent = 'Botón 2';
//   boton2.style.backgroundColor = 'purple';

//   elemento.appendChild(boton1);
//   elemento.appendChild(boton2);
// } else {
//   console.log('El elemento no se encontró');
// }


//Implementacion de elementos 
// const elemento = document.querySelector('.page-footer-social.clearfix');

// if (elemento !== null) {
//   const nuevoElemento = document.createElement('div');
//   nuevoElemento.textContent = 'Nuevo elemento';

//   elemento.appendChild(nuevoElemento);
// } else {
//   console.log('El elemento no se encontró');
// }