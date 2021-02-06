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


// Galeria de imagenes

document.querySelectorAll('.contenedor-modal .overlay').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-modal ').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});
