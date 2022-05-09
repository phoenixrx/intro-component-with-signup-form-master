function validarVacio() {
  const inputVacio = document.querySelectorAll(".inpFor");
  const alertaVacio = document.querySelectorAll(".alertas");

  inputVacio.forEach((item, indice) => {
    if (inputVacio[indice].value == "") {
      inputVacio[indice].classList.add("cError");
      alertaVacio[indice].classList.add("cError");
    } else {
      inputVacio[indice].classList.remove("cError");
      alertaVacio[indice].classList.remove("cError");
    }
  });
}

const correo = document.getElementById("correo").value;
const hacerClic = document.getElementById("boton");
hacerClic.addEventListener("click", clicker, false);
function clicker() {
  let co = document.getElementById("correo").value;
  validarEmail(co);
}
function validarEmail(co) {
  re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const columnas = document.getElementById("correo");
  const errorCorreo = document.getElementById("correoLb");

  validarVacio();
  if (!re.exec(co.toLowerCase())) {
    columnas.classList.add("cError");
    errorCorreo.classList.add("cError");
  } else {
    columnas.classList.remove("cError");
    errorCorreo.classList.remove("cError");
  }
}
