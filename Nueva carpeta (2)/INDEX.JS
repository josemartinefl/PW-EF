const btnVerProductos = document.getElementById('btnVerProductos');

if (btnVerProductos) {
    btnVerProductos.addEventListener('click', function() {
        document.getElementById('nuestrosproductos').scrollIntoView();
    });
}

const btnCatalogoPolos = document.getElementById('btnCatalogoPolos');

if (btnCatalogoPolos) {
    btnCatalogoPolos.addEventListener('click', function() {
        alert("¡Hola! En breve te mostraremos el catálogo de: Polos");
    });
}

const btnCatalogoPoleras = document.getElementById('btnCatalogoPoleras');

if (btnCatalogoPoleras) {
    btnCatalogoPoleras.addEventListener('click', function() {
        alert("¡Hola! En breve te mostraremos el catálogo de: Poleras");
    });
}