const boton = document.querySelector(".box");
const navBar = document.querySelector(".navbar");
const navBarInvisible = document.querySelector(".navInvisible");
const seccion = document.querySelectorAll(".sec");

//const boton = document.getElementById("box");

let oldScroll = 0;

const funcion = () => {
  boton.classList.add("boxPush");
};
boton.addEventListener("mousedown", funcion);
boton.addEventListener("mouseup", () => {
  boton.classList.remove("boxPush");
  seccion[0].classList.toggle("fondo1");
  seccion[0].classList.toggle("fondo2");
  seccion[2].classList.toggle("fondo3");
  seccion[2].classList.toggle("fondo4");
});
boton.addEventListener("mouseleave", () => {
  boton.classList.remove("boxPush");
});
navBarInvisible.addEventListener("mouseenter", () => {
  console.log("wena!");
});

window.onscroll = function () {
  var y = window.scrollY;
  console.log(y);
  if (y > oldScroll) {
    console.log("bajando");
    if (y > 400) {
      navBar.classList.replace("navbarOn", "navbarOff");
      navBarInvisible.classList.replace("navbarOff", "navbarOn");
    }
  } else {
    console.log("subiendo");
    navBar.classList.replace("navbarOff", "navbarOn");
    navBarInvisible.classList.replace("navbarOn", "navbarOff");
  }
  navBar.addEventListener("mouseleave", () => {
    if (oldScroll < 400) {
      return;
    }
    if (y > 450) {
      navBar.classList.replace("navbarOn", "navbarOff");
      navBarInvisible.classList.replace("navbarOff", "navbarOn");
    }
  });

  //cambiar fondo segun scroll
  if (y > 799) {
    seccion[0].classList.toggle("fondo1");
    seccion[0].classList.toggle("fondo2");
  } else if (y < 640) {
    seccion[2].classList.toggle("fondo3");
    seccion[2].classList.toggle("fondo4");
  }
  oldScroll = y;
};

navBarInvisible.addEventListener("mouseenter", () => {
  navBar.classList.replace("navbarOff", "navbarOn");
});

navBar.addEventListener("mouseenter", () => {
  navBarInvisible.classList.replace("navbarOn", "navbarOff");
});

/*Gran parte del codigo es solo para el efecto de que al acercar el mouse hacia el header aparezca si este no existe
    "navBarInvisible" por lo que si este no es un efecto neceario puede reducirse casi a la mitad
*/
