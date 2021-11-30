---
pathPrefix: '/'
path: "/ut/ut4/ta7"
cover: "./grafica.png"
date: "2021-09-28"
title: "Utilización de Supported Vector Machines en RapidMiner"
published: true
tags: [Algoritmos no lineales','Supported Vector Machines','RapidMiner']
---

En este artículo se utilizará el algoritmo SVM y verá su funcionamiento.

# Datos

Se tienen los siguientes archivos de datos:
- [TA7-EJ1-SVM-ejemplonolineal.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta7/TA7-EJ1-SVM-ejemplonolineal.csv)

# Ejercicio 1

Utilizando RapidMiner se genero el siguiente pipeline:

![rapidminer](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta7/rapidminer.png?raw=true)

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

![performance](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta7/performance.png?raw=true)

Y el modelo generado es:

![kernel](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta7/kernel.png?raw=true)

Podemos analizar estos resultados de forma gráfica:

![grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta7/grafica.png?raw=true)

En la cual efectivamente podemos ver una forma de anillo

[Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta7/model.rmp)