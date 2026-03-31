// ===== CARRITO CON LOCALSTORAGE =====

// Obtener carrito desde localStorage o crear uno vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Elementos del DOM
const botones = document.querySelectorAll(".agregar");
const badge = document.getElementById("contador");

// Mostrar cantidad al cargar
if (badge) {
    badge.textContent = carrito.length;
}

// Agregar productos
botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {

        let producto = "";

        if (index === 0) producto = "Laptop Gamer";
        if (index === 1) producto = "Audífonos";
        if (index === 2) producto = "Smartphone";

        carrito.push(producto);

        // Guardar en localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Actualizar contador
        badge.textContent = carrito.length;
    });
});


// ===== DETALLE PRODUCTO (producto.html) =====

const params = new URLSearchParams(window.location.search);
const producto = params.get("producto");

const nombre = document.getElementById("nombre");
const imagen = document.getElementById("imagen");
const precio = document.getElementById("precio");

if (producto === "1") {
    nombre.textContent = "Laptop Gamer";
    imagen.src = "assets/img/producto1.png";
    precio.textContent = "$800.000";
}

if (producto === "2") {
    nombre.textContent = "Audífonos";
    imagen.src = "assets/img/producto2.png";
    precio.textContent = "$50.000";
}

if (producto === "3") {
    nombre.textContent = "Smartphone";
    imagen.src = "assets/img/producto3.png";
    precio.textContent = "$300.000";
}