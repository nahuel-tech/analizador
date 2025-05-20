# Analizador léxico y sintáctico para ClimaScript (ANTLR4 + Node.js)

Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 y JavaScript (Node.js), para un lenguaje llamado **ClimaScript**, diseñado para automatizar acciones relacionadas con sensores de clima (temperatura y humedad).

El programa analiza un archivo `.txt` que contiene código en este lenguaje, indicando si la entrada es válida o si contiene errores, además de mostrar los tokens y el árbol de análisis sintáctico.

---

## Requisitos

- **Node.js** instalado
- **Java** instalado (para ejecutar ANTLR)
- Descargar el archivo `antlr-4.13.2-complete.jar` desde [https://www.antlr.org/](https://www.antlr.org/) y guardarlo en el proyecto (por ejemplo en `tools/`)
- Instalar dependencias de Node.js:

  ```bash
  npm init -y
  npm install antlr4
  ```

---

## Generar archivos con ANTLR

1. Crear el archivo de gramática `Clima.g4` con la definición del lenguaje.
2. Crear el archivo de entrada `.txt` (por ejemplo `input.txt`) con el código ClimaScript a analizar.
3. Abrir una terminal en la carpeta del proyecto y ejecutar:

   ```bash
   java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor Clima.g4
   ```

   Esto generará los archivos de parser y lexer en JavaScript.
4. (Opcional) Crear la carpeta `.vscode` y dentro añadir un archivo `launch.json` para configurar la depuración en Visual Studio Code.
5. Crear el archivo principal `index.js` para leer el `.txt` y lanzar el análisis.
6. Crear `CustomClimaVisitor.js` para implementar la lógica personalizada de recorrido del árbol.

---

## Cómo ejecutar el analizador

Para analizar un archivo, usar:

```bash
node index.js 
```
---

## Ejemplos Validos
Todos los ejmplos deven ingresarse en el input.txt

Ejemplo 1 valido 

```bash
automate clima clima_miClima1 {
    monitorear humedad cada 5 min;
    cuando humedad sube de 60 hacer activar ventilacion;
    imprimir "Humedad alta" cada 5 min;
}
```

RESULTADO:
```bash
Tabla de Tokens y Lexemas:
--------------------------------------------------
| Lexema         | Token                         |
--------------------------------------------------
| automate       | AUTOMATE                      |
| clima          | CLIMA                         |
| clima_miClima1 | IDENTIFICADOR                 |
| {              | LLAVE_ABRE                    |
| monitorear     | MONITOREAR                    |
| humedad        | HUMEDAD                       |
| cada           | CADA                          |
| 5              | NUMERO                        |
| min            | MIN                           |
| ;              | PUNTOYCOMA                    |
| cuando         | CUANDO                        |
| humedad        | HUMEDAD                       |
| sube           | SUBE                          |
| de             | DE                            |
| 60             | NUMERO                        |
| hacer          | HACER                         |
| activar        | ACTIVAR                       |
| ventilacion    | VENTILACION                   |
| ;              | PUNTOYCOMA                    |
| imprimir       | IMPRIMIR                      |
| "Humedad alta" | TEXTO                         |
| cada           | CADA                          |
| 5              | NUMERO                        |
| min            | MIN                           |
| ;              | PUNTOYCOMA                    |
| }              | LLAVE_CIERRA                  |
--------------------------------------------------

Entrada válida.
Árbol de derivación: (clima_script automate clima clima_miClima1 { (accion (monitoreo monitorear (sensor_clima humedad) cada 5 min ;)) (accion (respuesta cuando (sensor_clima humedad) sube de 60 hacer activar (aspecto ventilacion) ;)) (accion (imprimir imprimir "Humedad alta" cada 5 min ;)) })

Codigo JavaScript generado:
--------------------------------------------------
const clima_miClima1 = {
  imprimir: function(texto, minutos) {
    setInterval(function() {
      console.log(texto);
    }, minutos * 60000);
  },
  monitorear: function(sensor, minutos) {
    setInterval(function() {
      console.log("Monitoreando " + sensor);
    }, minutos * 60000);
  },
  respuesta: function(sensor, valor, aspecto) {
    console.log("Si " + sensor + " sube de " + valor + ", activar " + aspecto);
  }
};

clima_miClima1.monitorear("humedad", 5);
clima_miClima1.respuesta("humedad", 60, "ventilacion");
clima_miClima1.imprimir("Humedad alta", 5); 
```
---
Ejemplo 2 valido

```bash
automate clima clima_oficina {
    monitorear temperatura cada 10 min;
    cuando temperatura sube de 20 hacer activar riego;
    imprimir "Temperatura baja" cada 10 min;
}

```
RESULTADO
```bash
Tabla de Tokens y Lexemas:
--------------------------------------------------
| Lexema         | Token                         |
--------------------------------------------------
| automate       | AUTOMATE                      |
| clima          | CLIMA                         |
| clima_oficina  | IDENTIFICADOR                 |
| {              | LLAVE_ABRE                    |
| monitorear     | MONITOREAR                    |
| temperatura    | TEMPERATURA                   |
| cada           | CADA                          |
| 10             | NUMERO                        |
| min            | MIN                           |
| ;              | PUNTOYCOMA                    |
| cuando         | CUANDO                        |
| temperatura    | TEMPERATURA                   |
| sube           | SUBE                          |
| de             | DE                            |
| 20             | NUMERO                        |
| hacer          | HACER                         |
| activar        | ACTIVAR                       |
| riego          | RIEGO                         |
| ;              | PUNTOYCOMA                    |
| imprimir       | IMPRIMIR                      |
| "Temperatura baja" | TEXTO                         |
| cada           | CADA                          |
| 10             | NUMERO                        |
| min            | MIN                           |
| ;              | PUNTOYCOMA                    |
| }              | LLAVE_CIERRA                  |
--------------------------------------------------

Entrada válida.
Árbol de derivación: (clima_script automate clima clima_oficina { (accion (monitoreo monitorear (sensor_clima temperatura) cada 10 min ;)) (accion (respuesta cuando (sensor_clima temperatura) sube de 20 hacer activar (aspecto riego) ;)) (accion (imprimir imprimir "Temperatura baja" cada 10 min ;)) })

Codigo JavaScript generado:
--------------------------------------------------
const clima_oficina = {
  imprimir: function(texto, minutos) {
    setInterval(function() {
      console.log(texto);
    }, minutos * 60000);
  },
  monitorear: function(sensor, minutos) {
    setInterval(function() {
      console.log("Monitoreando " + sensor);
    }, minutos * 60000);
  },
  respuesta: function(sensor, valor, aspecto) {
    console.log("Si " + sensor + " sube de " + valor + ", activar " + aspecto);
  }
};

clima_oficina.monitorear("temperatura", 10);
clima_oficina.respuesta("temperatura", 20, "riego");
clima_oficina.imprimir("Temperatura baja", 10);
```
---
## Ejemplos Invalidos

Ejemplo 3 invalido

```bash
automate clima clima_miClima1 {
    monitorear humedad cada 5 min
    cuando humedad sube de 60 hacer activar ventilacion;
    imprimir "Humedad alta" cada 5 min;
}
```
RESULTADO
```bash
Tabla de Tokens y Lexemas:
--------------------------------------------------
| Lexema         | Token                         |
--------------------------------------------------
| automate       | AUTOMATE                      |
| clima          | CLIMA                         |
| clima_miClima1 | IDENTIFICADOR                 |
| {              | LLAVE_ABRE                    |
| monitorear     | MONITOREAR                    |
| humedad        | HUMEDAD                       |
| cada           | CADA                          |
| 5              | NUMERO                        |
| min            | MIN                           |
| cuando         | CUANDO                        |
| humedad        | HUMEDAD                       |
| sube           | SUBE                          |
| de             | DE                            |
| 60             | NUMERO                        |
| hacer          | HACER                         |
| activar        | ACTIVAR                       |
| ventilacion    | VENTILACION                   |
| ;              | PUNTOYCOMA                    |
| imprimir       | IMPRIMIR                      |
| "Humedad alta" | TEXTO                         |
| cada           | CADA                          |
| 5              | NUMERO                        |
| min            | MIN                           |
| ;              | PUNTOYCOMA                    |
| }              | LLAVE_CIERRA                  |
--------------------------------------------------
line 3:2 missing ';' at 'cuando'

Se encontraron errores de sintaxis en la entrada.
```
---
Ejemplo 4 invalido
```bash
automate clima clima_miClima2 {
    cuando temperatura sube de 30 activar riego;
    imprimir "Temperatura alta" cada 3 minutos;
}
```
RESULTADO
```bash
Tabla de Tokens y Lexemas:
--------------------------------------------------
| Lexema         | Token                         |
--------------------------------------------------
| automate       | AUTOMATE                      |
| clima          | CLIMA                         |
| clima_miClima2 | IDENTIFICADOR                 |
| {              | LLAVE_ABRE                    |
| cuando         | CUANDO                        |
| temperatura    | TEMPERATURA                   |
| sube           | SUBE                          |
| de             | DE                            |
| 30             | NUMERO                        |
| activar        | ACTIVAR                       |
| riego          | RIEGO                         |
| ;              | PUNTOYCOMA                    |
| imprimir       | IMPRIMIR                      |
| "Temperatura alta" | TEXTO                         |
| cada           | CADA                          |
| 3              | NUMERO                        |
| minutos        | IDENTIFICADOR                 |
| ;              | PUNTOYCOMA                    |
| }              | LLAVE_CIERRA                  |
--------------------------------------------------
line 2:32 missing 'hacer' at 'activar'
line 3:37 mismatched input 'minutos' expecting 'min'

Se encontraron errores de sintaxis en la entrada.
```
