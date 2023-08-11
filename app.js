const colorRojo = document.getElementById("rojo");
const colorVerde = document.getElementById("verde");
const colorAzul = document.getElementById("azul");


const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = colorRojo.value;
let verde = colorVerde.value;
let azul = colorAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

colorRojo.addEventListener("change", (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
})

colorVerde.addEventListener("change", (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
})

colorAzul.addEventListener("change", (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
})

