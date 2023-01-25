//  Boton 1
let boton1 = document.getElementById("boton1");

let boton_text1 = document.getElementById("boton_text1");

boton1.addEventListener("click", mostrar_text1);

function mostrar_text1() {
  boton_text1.classList.toggle("show");

  if (boton_text1.classList.contains("show")) {
    boton1.innerHTML = "Teléfono";
  } else {
    boton1.innerHTML = "Ver Teléfono";
  }
}

//  Boton 2
let boton2 = document.getElementById("boton2");

let boton_text2 = document.getElementById("boton_text2");

boton2.addEventListener("click", mostrar_text2);

function mostrar_text2() {
  boton_text2.classList.toggle("show");

  if (boton_text2.classList.contains("show")) {
    boton2.innerHTML = "Dirección";
  } else {
    boton2.innerHTML = "Ver Dirección";
  }
}

//  Boton 3
let boton3 = document.getElementById("boton3");

let boton_text3 = document.getElementById("boton_text3");

boton3.addEventListener("click", mostrar_text3);

function mostrar_text3() {
  boton_text3.classList.toggle("show");

  if (boton_text3.classList.contains("show")) {
    boton3.innerHTML = "Correo";
  } else {
    boton3.innerHTML = "Ver Correo";
  }
}

//  Boton 4
let boton4 = document.getElementById("boton4");

let boton_text4 = document.getElementById("boton_text4");

boton4.addEventListener("click", mostrar_text4);

function mostrar_text4() {
  boton_text4.classList.toggle("show");

  if (boton_text4.classList.contains("show")) {
    boton4.innerHTML = "Pagina Web";
  } else {
    boton4.innerHTML = "Ver Pagina Web";
  }
}