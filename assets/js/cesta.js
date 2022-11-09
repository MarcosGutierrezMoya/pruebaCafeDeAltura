function sumarCantidad() {
    cantidadProducto.innerText += 1;
}

let precio = document.getElementById("precio")

function ponerPrecio(num) {
    precio.innerText = num;
}

export{ponerPrecio, precio}