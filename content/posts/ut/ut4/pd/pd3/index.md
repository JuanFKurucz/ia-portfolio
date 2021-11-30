---
pathPrefix: '/'
path: "/pd/ut4/pd3"
cover: "./grafica.png"
date: "2021-10-08"
title: "Simulando el algoritmo de Supported Vector Machines en Excel"
published: true
tags: ['Algoritmos no lineales','Supported Vector Machines','Excel']
---

En este artículo se simulara el algoritmo de Supported Vector Machines (SVM) en una hoja de cálculo de Excel.

# Algoritmo

El algoritmo de SVM se puede definir como la ecuación Salida = Y x (B1 × X1 + B2 × X2 )

Del cual tenemos que los parámetros de B se calculan con:
![b](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd3/b.png?raw=true)

# Datos

Se utilizará el siguiente conjunto de datos
![data](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd3/data.png?raw=true)

Que al graficarlo se visualiza de la siguiente forma
![grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd3/grafica.png?raw=true)

# Entrenamiento

El entrenamiento puede ser visualizado en el archivo de excel proporcionado, a continuación mostramos los resultados de las primeras épocas
![epochs](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd3/epochs.png?raw=true)

Este entrenamiento dio la siguiente exactitud:

![exactitud](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd3/exactitud.png?raw=true)

# Archivo

[Archivo de excel](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd3/excel.xlsx?raw=true)
