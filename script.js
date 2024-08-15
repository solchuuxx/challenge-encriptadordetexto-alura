// Elementos del DOM
const inputText = document.getElementById('inputText');
const output = document.getElementById('output');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const messageNotFound = document.querySelector('.div2 h2');
const image = document.querySelector('.imagen');
const text = document.querySelector('.text');

//encriptar
function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// Desencriptar
function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

//validación
function validateText(text) {
    return /^[a-z\s]+$/.test(text);
}

// Mostrar u ocultar
inputText.addEventListener('input', () => {
    if (inputText.value.trim() === "") {
        messageNotFound.style.display = 'block';
        text.style.display = 'block';
        image.style.display = 'block';
        output.style.display = 'none';
    } else {
        messageNotFound.style.display = 'none';
        text.style.display = 'none';
    }
});

// Cifrar
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (validateText(text)) {
        output.textContent = encrypt(text);
        output.style.display = 'block';
    } else {
        alert('Solo se permiten letras minúsculas y espacios.');
    }
});

// Descifrar
decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (validateText(text)) {
        output.textContent = decrypt(text);
        output.style.display = 'block';
    } else {
        alert('Solo se permiten letras minúsculas y espacios.');
    }
});

//copiar texto
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(output.textContent).then(() => {
        alert('Texto copiado al portapapeles');
    });
});
