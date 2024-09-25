const characters = ["A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "~",
    "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
    "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
    "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let firstEl = document.getElementById("firstPw");
let secEl = document.getElementById("secPw");

let symbolEl = document.getElementById("symbol-el");
let numEl = document.getElementById("number-el");

function genPassword() {
    firstEl.textContent = firstPa();
    secEl.textContent = secPa();
}

// Función para filtrar el array de caracteres basado en los switches
function validateSwitch() {
    let filteredArray = characters.slice(); // Copiamos el array original

    if (numEl.checked) {
        filteredArray = filteredArray.filter(char => !numbers.includes(char)); // Excluimos los números
    }

    if (symbolEl.checked) {
        filteredArray = filteredArray.filter(char => !symbols.includes(char)); // Excluimos los símbolos
    }

    return filteredArray; // Retornamos el array filtrado
}

function firstPa() {
    let password = "";
    const filteredCharacters = validateSwitch(); // Obtenemos el array filtrado

    for (let i = 0; i < 15; i++) {
        let ranOne = Math.floor(Math.random() * filteredCharacters.length);
        password += filteredCharacters[ranOne];
    }
    return password;
}

function secPa() {
    let password = "";
    const filteredCharacters = validateSwitch(); // Obtenemos el array filtrado

    for (let i = 0; i < 15; i++) {
        let ranOne = Math.floor(Math.random() * filteredCharacters.length);
        password += filteredCharacters[ranOne];
    }
    return password;
}
function copyBothPasswords() {
    // Creamos una variable que combina ambas contraseñas
    const combinedPasswords = firstEl.textContent + " " + secEl.textContent;

    // Creamos un elemento de texto temporal para seleccionar y copiar
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = combinedPasswords;
    document.body.appendChild(tempTextArea);

    // Seleccionamos y copiamos el contenido al portapapeles
    tempTextArea.select();
    document.execCommand("copy");

    // Eliminamos el elemento temporal
    document.body.removeChild(tempTextArea);

    // Mostramos una alerta de confirmación
    alert("Copiadas las contraseñas: " + combinedPasswords);
}