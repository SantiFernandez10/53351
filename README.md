# Analizador Legajo 53351

Este analizador fue solicitado para la materia Sintáxis y Semántica de los lenguajes, y se realizó con Node.js y ANTLR4.

## Cómo instalar
1. Clonar este repositorio en tu computadora.
2. Ingresar a la carpeta del repositorio recién descargado:
   `cd 53351`
3. Ingresar a la subcarpeta del código ejecutando: 
   `cd analizador`
4. Instalar las dependencias ejecutando: 
   `npm install`
5. Volver a la carpeta principal del proyecto ejecutando: 
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
