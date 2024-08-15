# Encriptador de Texto

Este proyecto es un simple encriptador y desencriptador de texto que permite a los usuarios convertir un texto en un formato encriptado y luego volver a desencriptarlo. El propósito principal es practicar HTML, CSS y JavaScript en un entorno práctico.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Funciones Implementadas](#funciones-implementadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autor](#autor)

## Descripción

El encriptador de texto toma un mensaje escrito en minúsculas y lo encripta siguiendo un patrón específico de reemplazo de caracteres. Los usuarios también pueden desencriptar el texto para recuperar el mensaje original. El proyecto incluye validación para asegurar que solo se ingresen letras minúsculas y espacios, y proporciona una interfaz de usuario sencilla y amigable.

## Instalación
Para ejecutar este proyecto en tu máquina local:

1. Clona el repositorio en tu máquina:
    ```bash
    git clone https://github.com/solchuuxx/challenge-encriptadordetexto-alura.git
    ```
2. Navega hasta la carpeta del proyecto:
    ```bash
    cd challenge-encriptadordetexto-alura
    ```
3. Abre el archivo `index.html` en tu navegador preferido.

## Uso
1. Escribe el texto que deseas encriptar o desencriptar en el área de texto.
2. Presiona el botón **Cifrar** para encriptar el texto o el botón **Descifrar** para desencriptarlo.
3. El resultado se mostrará en la sección de salida.
4. Si el campo de texto está vacío, se mostrará un mensaje indicando que "Ningún mensaje fue encontrado".
5. Puedes copiar el texto cifrado o descifrado utilizando el botón **Copiar**.

## Funciones Implementadas
- **Cifrar texto:** Reemplaza ciertas letras con cadenas específicas para encriptar el mensaje.
- **Descifrar texto:** Reemplaza las cadenas encriptadas con sus letras originales para recuperar el mensaje.
- **Validación de entrada:** Solo permite letras minúsculas y espacios en el texto.
- **Interfaz reactiva:** Muestra un mensaje cuando no hay texto en el área de entrada y oculta el resultado en caso contrario.
- **Copiar al portapapeles:** Permite copiar el texto resultante para usarlo en otro lugar.

## Estructura del Proyecto
```plaintext
challenge-encriptadordetexto-alura/
│
├── challenge.html     # Estructura HTML del proyecto
├── index.css          # Estilos CSS para la interfaz de usuario
├── script.js          # Lógica de JavaScript para el encriptador
└── README.md          # Documentación del proyecto
``` 

## Tecnologías Utilizadas

- HTML5: Para la estructura y el contenido de la página.
- CSS3: Para la presentación y el diseño de la página.
- JavaScript: Para la lógica de encriptación, desencriptación, validación y manejo de eventos en la interfaz de usuario.