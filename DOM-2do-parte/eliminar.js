/* ELIMINAR ELEMENTOS DOM  */
//Link de la Pagina a Modificar 
//https://www.viki.com/tv/39658c-romance-of-a-twin-flower

//Eliminacion del footer
const elemento = document.querySelector('.page-footer-social.clearfix');

if (elemento !== null) {
  elemento.remove();
} else {
  console.log('El elemento no se encontró');
}
