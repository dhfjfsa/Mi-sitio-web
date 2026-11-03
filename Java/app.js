// PUNTO 1: Función para cambiar la imagen simulando las miniaturas
function cambiarLado(vista) {
    let imagen = document.getElementById("imagen-producto");
    
    if (vista === 'vista1') {
        imagen.src = "669eb72d-9222-4c1c-9d29-c093ee195e02.jpeg";
    } else if (vista === 'vista2') {
        imagen.src = "7ca91355-a095-4f74-96b8-508b34a504cd.jpeg";
    } else if (vista === 'vista3') {
        imagen.src = "543c173d-00c2-4d0e-8644-69c56e7752d0.jpeg";
    } else if (vista === 'vista4') {
        imagen.src = "669eb72d-9222-4c1c-9d29-c093ee195e02.jpeg"; 
    }
}

// PUNTO 2: Funciones para ver y ocultar la descripción
function mostrarDescripcion() {
    document.getElementById("caja-descripcion").style.display = "block";
}

function ocultarDescripcion() {
    document.getElementById("caja-descripcion").style.display = "none";
}

// PUNTO 3: Función para resaltar el precio
function resaltarPrecio() {
    let precio = document.getElementById("texto-precio");
    if (precio) {
        precio.classList.toggle("precio-resaltado");
    }
}

// Función auxiliar para la práctica de JavaScript en lınea
function myFunction() {
    const elemento = document.getElementById("demo4");
    if (elemento) {
        elemento.innerHTML = "¡Función ejecutada correctamente!";
    }
}