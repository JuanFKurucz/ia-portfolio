---
pathPrefix: '/'
path: "/pd/ut4/ta6"
cover: "./grafica.jpeg"
date: "2021-09-28"
title: "Utilización de Supported Vector Machines en RapidMiner"
published: true
tags: ['Algoritmos no lineales','Supported Vector Machines','RapidMiner']
---

En este articulo se busca utilizar el algoritmo Supported Vector Machines (SVM) y ver su funcionamiento.

# Datos

Tenemos los siguientes archivos de datos:
- [TA6-EJ2.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/TA6-EJ2.csv)
- [TA6-EJ2-TEST.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/TA6-EJ2-TEST.csv)

# Visualizacion

Graficamos los datos empleados en `TA6-EJ2.csv`, partiendo del ejemplo que graficas del siguiente estilo pueden ser utiles:

![grafica-ejemplo](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/grafica_ejemplo.png?raw=true)

Tenemos que utilizando RapidMiner podemos realizar graficas de este tipo, el resultado que nos dio al cargar el conjunto y realizar el mismo grafico fue:

![grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/grafica.png?raw=true)

A su vez se nos pide entrenar un SVM con los datos de `TA6-EJ2.csv` y evaluar la prediccion de los datos de `TA6-EJ2-TEST.csv`.

El pipeline de RapidMiner quedo de la siguiente forma:

![rapidminer](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/rapidminer.png?raw=true)

Los resultados obtenidos fueron:

Modelo generado:
![modelo](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/model.png?raw=true)

Y las predicciones del conjunto de datos de test:
![test](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/result_test.png?raw=true)

[Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/ut4-ta6-ej2.rmp)


# Otro ejemplo

Utilizando RapidMiner se genero el siguiente pipeline:

![rapidminer](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/2_rapidminer.png?raw=true)

La información obtenido de Supported Vector Machines es la siguiente:

Es una implementación de mySVM por Stefan Rueping, puede usarse para regresión y clasificación, soporta distintos tipos de kernel y funciona intentando separar los puntos lo más posible generando planos.

Parámetros y sus valores por defecto:
- kernel type: dot
- kernel gamma: 1.0
- kernel sigma1: 1.0
- kernel sigma2: 0.0
- kernel sigma3: 2.0
- kernel shift: 1.0
- kernel degree: 2.0
- kerne a: 1.0
- kernel b: 0.0
- kernel cache: 200
- C: 0.0
- convergence epsilon: 0.001
- max iterations: 100000
- scale: true
- L pos: 1.0
- L neg: 1.0
- epsilon: 0.0
- epsilon plus: 0.0
- epsilon minus: 0.0
- balance cost: false
- quadratic loss pos: false
- quadratic loss neg: false

Como vemos se tiene una gran cantidad de parámetros específicos para cada caso, las posibilidades de combinaciones para ajustar e hiper tunear el modelo son muy grandes.

A continuación se nos pide evaluar la performance del pipeline creado, la cual nos dio:

![performance](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/2_performance.png?raw=true)

Y el modelo generado es:

![kernel](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/2_kernel.png?raw=true)

Podemos analizar estos resultados de forma gráfica:

![grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/2_grafica.png?raw=true)

En la cual efectivamente podemos ver una forma de anillo

[Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/2_model.rmp)