// ===== LOCALSTORAGE =====
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ===== CONTADOR =====
const badge = document.getElementById("contador");
if (badge) {
    badge.textContent = carrito.length;
}

// ===== BOTONES AGREGAR =====
const botones = document.querySelectorAll(".agregar");

botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {

        let producto = "";

        if (index === 0) producto = "Laptop Gamer";
        if (index === 1) producto = "Audífonos";
        if (index === 2) producto = "Smartphone";

        carrito.push(producto);

        localStorage.setItem("carrito", JSON.stringify(carrito));

        badge.textContent = carrito.length;
    });
});


// ===== MOSTRAR CARRITO =====
const lista = document.getElementById("lista-carrito");

if (lista) {
    mostrarCarrito();
}

function mostrarCarrito() {
    lista.innerHTML = "";

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between");

        li.innerHTML = `
            ${producto}
            <button class="btn btn-sm btn-danger eliminar" data-index="${index}">
                Eliminar
            </button>
        `;

        lista.appendChild(li);
    });

    eliminarProducto();
}


// ===== ELIMINAR PRODUCTO =====
function eliminarProducto() {
    const botonesEliminar = document.querySelectorAll(".eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");

            carrito.splice(index, 1);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            mostrarCarrito();

            if (badge) {
                badge.textContent = carrito.length;
            }
        });
    });
}


// ===== VACIAR CARRITO =====
const btnVaciar = document.getElementById("vaciar");

if (btnVaciar) {
    btnVaciar.addEventListener("click", () => {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();

        if (badge) {
            badge.textContent = 0;
        }
    });
}


// ===== DETALLE PRODUCTO =====
const params = new URLSearchParams(window.location.search);
const producto = params.get("producto");

const nombre = document.getElementById("nombre");
const imagen = document.getElementById("imagen");
const precio = document.getElementById("precio");
const decripcion = document.getElementById("descripcion");

// Cambiar contenido según producto
switch (producto) {
    case "1":
        nombre.textContent = "Laptop Gamer";
        imagen.src = "assets/img/producto1.png";
        precio.textContent = "$800.000";
        descripcion.textContent = "Potente laptop ideal para gaming y alto rendimiento.";
        break;

    case "2":
        nombre.textContent = "Audífonos";
        imagen.src = "assets/img/producto2.png";
        precio.textContent = "$50.000";
        descripcion.textContent = "Audífonos con excelente calidad de sonido y cancelación de ruido.";
        break;

    case "3":
        nombre.textContent = "Smartphone";
        imagen.src = "assets/img/producto3.png";
        precio.textContent = "$300.000";
        descripcion.textContent = "Smartphone moderno con gran cámara y alto rendimiento.";
        break;

    default:
        nombre.textContent = "Producto no encontrado";
}