// Constants
const menu = document.querySelector(".menu");
const close_btn = document.querySelector(".close");
const navigation = document.querySelector(".navigation");

// Menu Behaviour
menu.addEventListener("click", () => {
  navigation.classList.toggle("spread");
  menu.hidden = true;
  // close_btn.hidden = false;
});

close_btn.addEventListener("click", () => {
  navigation.classList.toggle("spread");
  menu.hidden = false;
  // close_btn.hidden = true;
});

window.addEventListener("click", (e) => {
  if (
    navigation.classList.contains("spread") &&
    e.target != navigation &&
    e.target != menu
  ) {
    navigation.classList.toggle("spread");
    menu.hidden = false;
    // close_btn.hidden = true;
  }
});

// const gallery = document.querySelectorAll(".gallery");
// const imagenesLight = document.querySelector(".agregar-imagen");
// const contenedorLight = document.querySelector(".imagen-light");

// gallery.forEach((imagen) => {
//   imagen.addEventListener("click", () => {
//     aparecerImagen(imagen.getAttribute("src"));
//   });
// });

// contenedorLight.addEventListener("click", (e) => {
//   if (e.target !== imagenesLight) {
//     contenedorLight.classList.toggle("show");
//     imagenesLight.src.classList.toggle("showImage");
//     menu.style.opacity = "0";
//   }
// });

// const aparecerImagen = (imagen) => {
//   imagenesLight.src = imagen;
//   contenedorLight.classList.toggle("show");
//   imagenesLight.src.classList.toggle("showImage");
//   menu.style.opacity = "0";
// };


// CONTADOR


const actualizador = setInterval(function(){

  //Definimos el tiempo de inicio de la actividad de la pagina
  
  const inicioClase = new Date('March 1, 2021 10:00:00').getTime();
  
  
  //Definimos el tiempo de actual
  
  const tiempoActual = new Date().getTime();
  
  
  //Calculamos la diferencia entre el inicio y el tiempo actual;
  
  let tiempoRestante = inicioClase - tiempoActual;
  
  //Convertimos los milisegundos en segundos 1s = 1000 ms;
  
  tiempoRestante /=1000;
  
  //Calculamos los dias restantes
  
  const dias = Math.floor(tiempoRestante/(60*60*24));
  
  
  //Calculamos las horas restantes
  
  const horas = Math.floor((tiempoRestante%(60*60*24))/(60*60));
  
  
  
  //Calculamos los minutos restantes
  
  const minutos = Math.floor((tiempoRestante%(60*60))/(60));
  
  //Calculamos los segundos restantes
  
  const segundos = Math.floor(tiempoRestante%(60));
  
  
  const contador = document.getElementById('contador');
  
  
  //Agregamos los elementos HTML con el valor del tiempo al contenedor con el id contador
  
  contador.innerHTML = `
  <div>
      <span>${dias}</span>
      <span class="texto">Dias</span>
  </div> 
  <div>
      <span>${horas}</span>
      <span class="texto">Horas</span>
  </div>
  <div>
      <span>${minutos}</span>
      <span class="texto">Minutos</span>
  </div>
  <div>
      <span>${segundos}</span>
      <span class="texto">Segundos</span>
  </div>
  `;
  }, 1000);