/* INDEX.JS */
const btnVerProductos = document.getElementById('btnVerProductos');

if (btnVerProductos) {
    btnVerProductos.addEventListener('click', function() {
        window.location.href = '#nuestrosproductos';
    });
}

const botonesCatalogo = document.querySelectorAll('.btn-catalogo');

for (let i = 0; i < botonesCatalogo.length; i++) {
    botonesCatalogo[i].addEventListener('click', function() {
        const tipoProducto = this.getAttribute('data-producto');
        alert("¡Hola! En breve te mostraremos el catálogo de: " + tipoProducto);
    });
}