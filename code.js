/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);


function obtenerDatosDelUsuario() {

  const hoy = new Date;
  datosPersona.nombre = prompt("ingresa tu nombre");
  let anioNacimiento = parseInt(prompt("Ingresa el año en el que naciste"));
  while (isNaN(anioNacimiento)) {
    anioNacimiento = parseInt(prompt("El valor debe ser numerico\n Ingrese el año en que naciste:"))
  }
  datosPersona.edad = hoy.getFullYear() - anioNacimiento;
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  datosPersona.interesPorJs = (confirm("Te interesa JavaScript?")) ? "si" : "no";


}


function renderizarDatosUsuario() {

  obtenerDatosDelUsuario();

  document.querySelector("#nombre").innerHTML = datosPersona.nombre;
  document.querySelector("#edad").innerHTML = datosPersona.edad;
  document.querySelector("#ciudad").innerHTML = datosPersona.ciudad;
  document.querySelector("#javascript").innerHTML = datosPersona.interesPorJs;


}


function recorrerListadoYRenderizarTarjetas() {

  const fila = document.querySelector("#fila");

  if ((document.querySelectorAll(".caja").length) != (listado.lenght)) {

    listado.forEach((materia) => {
      fila.innerHTML += `
      <div class="caja">
        <img src= "${materia.imgUrl}" alt="${materia.lenguajes}"> 
        <p class ="lenguajes">${materia.lenguajes}</p>
        <p class = "bimestre">${materia.bimestre}</p>
      </div>
      `
    })
  }
}


function alternarColorTema() {

  if (cambiarTema) {
    document.querySelector("body").classList.toggle('dark');
    cambiarTema.classList.toggle('button');

  }


}


window.addEventListener("load", function () {
  document.addEventListener("keypress", function (e) {
    let letraF = e.key
    if (letraF == "f" || letraF == "F") {
      document.querySelector("#sobre-mi").classList.remove("oculto")
    }
  })
})