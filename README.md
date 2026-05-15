# Analizador Legajo 53351

Este analizador fue solicitado para la materia Sintáxis y Semántica de los lenguajes, y se realizó con Node.js y ANTLR4.

## Cómo instalar
1. Clonar este repositorio.
2. Abrir la terminal en la carpeta del proyecto.
3. Ejecutar el comando: `npm install`

## Cómo ejecutar las pruebas
Para probar el analizador, usar el comando `node index.js` y luego el nombre del archivo que queres probar:

### Pruebas correctas:
Las pruebas correctas y que no dan errores son estas:
node analizador/index.js input_correcto_1.txt
node analizador/index.js input_correcto_2.txt

### Pruebas incorrectas (deben dar error):
Las pruebas incorrectas y que dan errores son estas:
node analizador/index.js input_incorrecto_1.txt
node analizador/index.js input_incorrecto_2.txt
