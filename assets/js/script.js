let contador = 0;

const botones = document.querySelectorAll(".agregar");
const badge = document.getElementById("contador");

// Evita error si no existe el badge
if (botones && badge) {
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            contador++;
            badge.textContent = contador;
        });
    });
}

// Obtener parámetro desde la URL
const params = new URLSearchParams(window.location.search);
const producto = params.get("producto");

// Elementos del HTML
const nombre = document.getElementById("nombre");
const imagen = document.getElementById("imagen");
const precio = document.getElementById("precio");
const descripcion = document.getElementById("descripcion");

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