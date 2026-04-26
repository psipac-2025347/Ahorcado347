let vidas = 7;
let palabras = ["javascript", "programacion", "desarrollo", "computadora", "teclado"];
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
let fallos = 0;
let aciertos = 0;
let letrasAdivinadas = [];


function iniciarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    fallos = 0;
    aciertos = 0;
    letrasAdivinadas = [];
    actualizarJuego();
}

function adivinarLetra(letra) {
    if (letrasAdivinadas.includes(letra)) {
        alert("Ya has adivinado esa letra. Intenta con otra.");
        return;
    }
    letrasAdivinadas.push(letra);

    if (palabraSecreta.includes(letra)) {
        aciertos += palabraSecreta.split(letra).length - 1;
        if (aciertos === palabraSecreta.length) {
            alert("¡Felicidades! Has adivinado la palabra secreta: " + palabraSecreta);
            reiniciarJuego();
        }
    } else {
        fallos++;
        if (fallos >= vidas) {
            alert("¡Has perdido! La palabra secreta era: " + palabraSecreta);
            reiniciarJuego();
        }
    }
    actualizarJuego();
}

function actualizarJuego() {
    let palabraMostrada = "";  
    for (let letra of palabraSecreta) {
        if (letrasAdivinadas.includes(letra)) {
            palabraMostrada += letra + " ";
        }
        else {
            palabraMostrada += "_ ";
        }
    }
    document.getElementById("palabra").textContent = palabraMostrada.trim();
    document.getElementById("vidas").textContent = "Vidas restantes: " + (vidas - fallos);
}

function reiniciarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    fallos = 0;
    aciertos = 0;
    letrasAdivinadas = [];
    actualizarJuego();
}
document.getElementById("adivinar").addEventListener("click", function() {
    let letra = document.getElementById("letra").value.toLowerCase();

    if (letra.length === 1 && letra.match(/[a-z]/i)) {
        adivinarLetra(letra);
    } else {
        alert("Por favor, ingresa una letra válida.");
    }
    document.getElementById("letra").value = "";
}
);
actualizarJuego();

