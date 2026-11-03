// Mostrar la fecha al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date().toLocaleDateString('es-ES', opcionesFecha);
    document.getElementById('fechaActual').textContent = fecha.charAt(0).toUpperCase() + fecha.slice(1);
});

// Función para procesar el cálculo
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operaciones = document.getElementsByName('operacion');
    const divResultado = document.getElementById('resultado');
    
    let operacionSeleccionada = "";
    for (let radio of operaciones) {
        if (radio.checked) {
            operacionSeleccionada = radio.value;
            break;
        }
    }

    if (isNaN(num1) || isNaN(num2)) {
        divResultado.innerHTML = "<span style='color:#ffd700;'>Ingresa ambos números.</span>";
        return;
    }

    let resultadoFinal = 0;
    
    switch (operacionSeleccionada) {
        case "Sumar": resultadoFinal = num1 + num2; break;
        case "Restar": resultadoFinal = num1 - num2; break;
        case "Multiplicar": resultadoFinal = num1 * num2; break;
        case "Dividir":
            if (num2 === 0) {
                divResultado.innerHTML = "<span style='color:#ff6b6b;'>No se puede dividir entre 0.</span>";
                return;
            }
            resultadoFinal = num1 / num2; 
            break;
    }

    // Mostrar resultado
    divResultado.innerHTML = `${resultadoFinal}`;

    // Desplegar el modal de planes premium tras 800 milisegundos
    setTimeout(() => {
        document.getElementById('modalSuscripcion').classList.remove('hidden');
    }, 800);
}

// Limpiar la calculadora
function limpiar() {
    document.getElementById('formCalculadora').reset();
    document.getElementById('resultado').innerHTML = "";
}

// Funciones para controlar el Modal de planes
function cerrarModal() {
    document.getElementById('modalSuscripcion').classList.add('hidden');
}

function elegirPlan(plan) {
    alert(`¡Felicidades! Has seleccionado el ${plan}. Redirigiendo a la pasarela de pago...`);
    cerrarModal();
}