const title = document.getElementById('title');
const startButton = document.querySelector('.start-button');
const startText = startButton.querySelector('p');
const palabraElement = document.getElementById('palabra').querySelector('p');

const buttonA = document.querySelector('.a-button-container .option-button');
const buttonB = document.querySelector('.b-button-container .option-button');
const buttonC = document.querySelector('.c-button-container .option-button');
const buttonD = document.querySelector('.d-button-container .option-button');

// Imágenes de cabello
const cabello1 = document.getElementById('cabello1');
const cabello2 = document.getElementById('cabello2');
const cabello3 = document.getElementById('cabello3');
const cabello4 = document.getElementById('cabello4');

// Imágenes de vestidos
const vestido1 = document.getElementById('vestido1');
const vestido2 = document.getElementById('vestido2');
const vestido3 = document.getElementById('vestido3');
const vestido4 = document.getElementById('vestido4');

// Imágenes de zapatos
const zapato1 = document.getElementById('zapato1');
const zapato2 = document.getElementById('zapato2');
const zapato3 = document.getElementById('zapato3');
const zapato4 = document.getElementById('zapato4');

// Imágenes de accesorios
const accesorio1 = document.getElementById('accesorio1');
const accesorio2 = document.getElementById('accesorio2');
const accesorio3 = document.getElementById('accesorio3');
const accesorio4 = document.getElementById('accesorio4');

let buttonsShown = false;
let cabelloSeleccionado = false;
let etapaVestidos = false;
let etapaZapatos = false;
let etapaAccesorios = false;
let cabelloActual = null;
let vestidoActual = null;
let zapatoActual = null;

startButton.addEventListener('click', () => {
    if (!buttonsShown) {
        document.querySelector('.a-button-container').style.display = 'flex';
        document.querySelector('.b-button-container').style.display = 'flex';
        document.querySelector('.c-button-container').style.display = 'flex';
        document.querySelector('.d-button-container').style.display = 'flex';
        title.style.display = 'none';
        startText.innerText = 'Ok';
        startText.classList.add('ok-text');
        palabraElement.innerText += 'e'; // Muestra la letra 'e' al inicio
        buttonsShown = true;
    }
    if (cabelloSeleccionado && !etapaVestidos) {
        etapaVestidos = true;
        palabraElement.innerText += 'e'; // Agrega otra 'e' al pasar a la etapa de vestidos
        mostrarVestidos();
    } else if (vestidoActual && !etapaZapatos) {
        etapaZapatos = true;
        palabraElement.innerText += 'e'; // Agrega otra 'e' al pasar a la etapa de zapatos
        mostrarZapatos();
    } else if (zapatoActual && !etapaAccesorios) {
        etapaAccesorios = true;
        palabraElement.innerText += 'e'; // Agrega otra 'e' al pasar a la etapa de accesorios
        mostrarAccesorios();
    } else if (etapaAccesorios) {
        finalizarJuego();
    }
});

function mostrarCabello(cabelloSeleccionadoElement) {
    if (!etapaVestidos) {
        [cabello1, cabello2, cabello3, cabello4].forEach(cabello => {
            cabello.style.display = 'none'; // Oculta todas las imágenes de cabello
        });
        cabelloSeleccionadoElement.style.display = 'block'; // Muestra solo la imagen seleccionada
        cabelloActual = cabelloSeleccionadoElement; // Guarda el cabello seleccionado actual
        cabelloSeleccionado = true; // Marca que se ha seleccionado un cabello
    }
}

function mostrarVestidos() {
    document.querySelectorAll('.option-prenda').forEach((prenda, index) => {
        prenda.src = `./assets/Vestidos/Vestido ${index + 1}.png`;
    });
    // Mantiene el cabello seleccionado visible
    if (cabelloActual) {
        cabelloActual.style.display = 'block';
    }
    [vestido1, vestido2, vestido3, vestido4].forEach(vestido => {
        vestido.style.display = 'none'; // Asegura que los vestidos estén ocultos hasta que se seleccione uno
    });
}

function mostrarVestidoSeleccionado(vestidoSeleccionadoElement) {
    [vestido1, vestido2, vestido3, vestido4].forEach(vestido => {
        vestido.style.display = 'none'; // Oculta todos los vestidos
    });
    vestidoSeleccionadoElement.style.display = 'block'; // Muestra solo el vestido seleccionado
    vestidoActual = vestidoSeleccionadoElement; // Guarda el vestido seleccionado actual
}

function mostrarZapatos() {
    document.querySelectorAll('.option-prenda').forEach((prenda, index) => {
        prenda.src = `./assets/Zapatos/Zapatos ${index + 1}.png`;
    });
    // Mantiene el cabello y vestido seleccionados visibles
    if (cabelloActual) {
        cabelloActual.style.display = 'block';
    }
    if (vestidoActual) {
        vestidoActual.style.display = 'block';
    }
    [zapato1, zapato2, zapato3, zapato4].forEach(zapato => {
        zapato.style.display = 'none'; // Asegura que los zapatos estén ocultos hasta que se seleccione uno
    });
}

function mostrarZapatoSeleccionado(zapatoSeleccionadoElement) {
    [zapato1, zapato2, zapato3, zapato4].forEach(zapato => {
        zapato.style.display = 'none'; // Oculta todos los zapatos
    });
    zapatoSeleccionadoElement.style.display = 'block'; // Muestra solo el zapato seleccionado
    zapatoActual = zapatoSeleccionadoElement; // Guarda el zapato seleccionado actual
}

function mostrarAccesorios() {
    document.querySelectorAll('.option-prenda').forEach((prenda, index) => {
        prenda.src = `./assets/Accesorios/Accesorio ${index + 1}.png`;
    });
    // Mantiene el cabello, vestido y zapatos seleccionados visibles
    if (cabelloActual) {
        cabelloActual.style.display = 'block';
    }
    if (vestidoActual) {
        vestidoActual.style.display = 'block';
    }
    if (zapatoActual) {
        zapatoActual.style.display = 'block';
    }
    [accesorio1, accesorio2, accesorio3, accesorio4].forEach(accesorio => {
        accesorio.style.display = 'none'; // Asegura que los accesorios estén ocultos hasta que se seleccione uno
    });
}

function mostrarAccesorioSeleccionado(accesorioSeleccionadoElement) {
    [accesorio1, accesorio2, accesorio3, accesorio4].forEach(accesorio => {
        accesorio.style.display = 'none'; // Oculta todos los accesorios
    });
    accesorioSeleccionadoElement.style.display = 'block'; // Muestra solo el accesorio seleccionado
}

function finalizarJuego() {
    document.querySelectorAll('.option-button-container').forEach(container => {
        container.style.display = 'none';
    });
    document.querySelector('.a-button-container').style.display = 'none';
    document.querySelector('.b-button-container').style.display = 'none';
    document.querySelector('.c-button-container').style.display = 'none';
    document.querySelector('.d-button-container').style.display = 'none';
    startButton.style.display = 'none';
    palabraElement.style.position = 'fixed';
    palabraElement.style.top = '10px';
    palabraElement.style.left = '50%';
    palabraElement.style.transform = 'translateX(-50%)';
    palabraElement.innerText += 'e'; // Indica que el personaje está completo

    // Muestra una explosión de confeti
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}

buttonA.addEventListener('click', () => {
    if (!etapaVestidos) {
        palabraElement.innerText += 'A';
        mostrarCabello(cabello1);
    } else if (!etapaZapatos) {
        palabraElement.innerText += 'A';
        mostrarVestidoSeleccionado(vestido1);
    } else if (!etapaAccesorios) {
        palabraElement.innerText += 'A';
        mostrarZapatoSeleccionado(zapato1);
    } else {
        palabraElement.innerText += 'A';
        mostrarAccesorioSeleccionado(accesorio1);
    }
});

buttonB.addEventListener('click', () => {
    if (!etapaVestidos) {
        palabraElement.innerText += 'B';
        mostrarCabello(cabello2);
    } else if (!etapaZapatos) {
        palabraElement.innerText += 'B';
        mostrarVestidoSeleccionado(vestido2);
    } else if (!etapaAccesorios) {
        palabraElement.innerText += 'B';
        mostrarZapatoSeleccionado(zapato2);
    } else {
        palabraElement.innerText += 'B';
        mostrarAccesorioSeleccionado(accesorio2);
    }
});

buttonC.addEventListener('click', () => {
    if (!etapaVestidos) {
        palabraElement.innerText += 'C';
        mostrarCabello(cabello3);
    } else if (!etapaZapatos) {
        palabraElement.innerText += 'C';
        mostrarVestidoSeleccionado(vestido3);
    } else if (!etapaAccesorios) {
        palabraElement.innerText += 'C';
        mostrarZapatoSeleccionado(zapato3);
    } else {
        palabraElement.innerText += 'C';
        mostrarAccesorioSeleccionado(accesorio3);
    }
});

buttonD.addEventListener('click', () => {
    if (!etapaVestidos) {
        palabraElement.innerText += 'D';
        mostrarCabello(cabello4);
    } else if (!etapaZapatos) {
        palabraElement.innerText += 'D';
        mostrarVestidoSeleccionado(vestido4);
    } else if (!etapaAccesorios) {
        palabraElement.innerText += 'D';
        mostrarZapatoSeleccionado(zapato4);
    } else {
        palabraElement.innerText += 'D';
        mostrarAccesorioSeleccionado(accesorio4);
    }
});
