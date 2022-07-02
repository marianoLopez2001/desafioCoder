const click = document.getElementById("botonClick")
const resetBoton = document.getElementById("botonReset");
let contador = document.createElement("p")
let contar = 0;

contador.innerHTML = contar;
document.body.appendChild(contador)

click.addEventListener("click", incrementar);
resetBoton.addEventListener("click", resetear);

function incrementar() {
    contador.innerText = contar +=1;
}

function resetear() {
    contador.innerText = contar = 0;
};
