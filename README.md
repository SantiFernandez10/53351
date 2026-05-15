# Analizador Sintáctico Lógico - Legajo 53351

Este proyecto es un analizador sintáctico para lógica proposicional construido con Node.js y ANTLR4.

## Cómo instalar
1. Clona este repositorio.
2. Abre la terminal en la carpeta del proyecto.
3. Ejecuta el comando: `npm install`

## Cómo ejecutar las pruebas
Para probar el analizador, usa el comando `node index.js` seguido del nombre del archivo que quieres probar:

### Pruebas correctas:
node index.js input_correcto_1.txt
node index.js input_correcto_2.txt

### Pruebas incorrectas (deben dar error):
node index.js input_incorrecto_1.txt
node index.js input_incorrecto_2.txt