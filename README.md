# Analizador Legajo 53351

Este analizador fue solicitado para la materia Sintáxis y Semántica de los lenguajes, y se realizó con Node.js y ANTLR4.

## Cómo instalar
1. Clonar este repositorio.
2. Abrir la terminal en la carpeta principal (raíz) del proyecto.
3. Ingresar a la carpeta del código ejecutando: 
   `cd analizador`
4. Instalar dependencias ejecutando: 
   `npm install`
5. Volver a la carpeta principal ejecutando: 
   `cd ..`

## Cómo ejecutar pruebas
Una vez instaladas las dependencias y estando parado en la carpeta principal (donde están los archivos .txt), podés copiar y pegar los siguientes comandos para evaluar cada caso:

### Pruebas correctas:
Las pruebas correctas y que no dan errores son estas:
node analizador/index.js input_correcto_1.txt
node analizador/index.js input_correcto_2.txt

### Pruebas incorrectas (deben dar error):
Las pruebas incorrectas y que dan errores son estas:
node analizador/index.js input_incorrecto_1.txt
node analizador/index.js input_incorrecto_2.txt
