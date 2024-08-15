# Encriptador de Texto

Este proyecto es un simple encriptador y desencriptador de texto que permite a los usuarios convertir un texto en un formato encriptado y luego volver a desencriptarlo[^1^][1][^2^][2]. El propósito principal es practicar HTML, CSS y JavaScript en un entorno práctico[^3^][3].

## Tabla de Contenidos
- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Funciones Implementadas](#funciones-implementadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)

## Descripción

El encriptador de texto toma un mensaje escrito en minúsculas y lo encripta siguiendo un patrón específico de reemplazo de caracteres[^4^][4]. Los usuarios también pueden desencriptar el texto para recuperar el mensaje original[^5^][5][^6^][6]. El proyecto incluye validación para asegurar que solo se ingresen letras minúsculas y espacios, y proporciona una interfaz de usuario sencilla y amigable[^7^][7].

## Instalación
Para ejecutar este proyecto en tu máquina local:[^10^][10]

1. Clona el repositorio en tu máquina:[^11^][11]
    ```bash
    git clone https://github.com/tu-usuario/encriptador-de-texto.git[^11^][11]
    ```
2. Navega hasta la carpeta del proyecto:
    ```bash
    cd encriptador-de-texto
    ```
3. Abre el archivo `index.html` en tu navegador preferido[^12^][12].

## Uso
1. Escribe el texto que deseas encriptar o desencriptar en el área de texto[^13^][13].
2. Presiona el botón **Cifrar** para encriptar el texto o el botón **Descifrar** para desencriptarlo[^14^][14][^15^][15].
3. El resultado se mostrará en la sección de salida[^16^][16].
4. Si el campo de texto está vacío, se mostrará un mensaje indicando que "Ningún mensaje fue encontrado"[^17^][17][^18^][18].
5. Puedes copiar el texto cifrado o descifrado utilizando el botón **Copiar**[^19^][19][^20^][20].

## Funciones Implementadas
- **Cifrar texto:** Reemplaza ciertas letras con cadenas específicas para encriptar el mensaje[^21^][21][^23^][23].
- **Descifrar texto:** Reemplaza las cadenas encriptadas con sus letras originales para recuperar el mensaje[^22^][22][^6^][6].
- **Validación de entrada:** Solo permite letras minúsculas y espacios en el texto[^8^][8][^9^][9].
- **Interfaz reactiva:** Muestra un mensaje cuando no hay texto en el área de entrada y oculta el resultado en caso contrario[^24^][24][^25^][25].
- **Copiar al portapapeles:** Permite copiar el texto resultante para usarlo en otro lugar[^26^][26][^27^][27].

## Estructura del Proyecto
```plaintext
encriptador-de-texto/
│
├── index.html         # Estructura HTML del proyecto
├── index.css          # Estilos CSS para la interfaz de usuario
├── script.js          # Lógica de JavaScript para el encriptador
└── README.md          # Documentación del proyecto
``` 

## Tecnologías Utilizadas

- HTML5: Para la estructura y el contenido de la página28.
- CSS3: Para la presentación y el diseño de la página29.
- JavaScript: Para la lógica de encriptación, desencriptación, validación y manejo de eventos en la interfaz de usuario3031