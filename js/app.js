fetch("./data.json")
.then(res => res.json())

//CREADOR DE CARDS IF STOCK=TRUE

.then(res => {for (const iterador of res) {
    cardContainer = document.querySelector("#card-container");
    const cardHTML = `
        <div class="card-container">
            <img src=${iterador.img} alt="">
              <p>${iterador.nombre}</p>
              <p>${iterador.descripcion}</p>
              <p>Precio: ${iterador.precio}</p>
              <button class="btn btn-primary" onClick="agregarAlCarrito(${iterador.id})">Agregar al carrito</button>
        </div>
        `
    iterador.stock && (cardContainer.innerHTML += cardHTML)
}})

let cardContainer

const precioDom = document.querySelector("#dom-precio")

//CARRITO DE COMPRAS

const Carrito = [];

