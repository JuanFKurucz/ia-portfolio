---
pathPrefix: '/'
path: "/pd/ut4-2/pd3"
cover: "./grafica.png"
date: "2021-10-29"
title: "Simulando el algoritmo de KNN en Excel"
published: true
tags: ['Algoritmos no lineales','KNN','Excel']
---

En este artículo se simulará el algoritmo de KNN en una hoja de cálculo de Excel.

# Algoritmo

El algoritmo de KNN se basa en encontrar los K vecinos más cercanos, para esto utilizaremos la distancia euclidia

![distancia](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/pd/pd3/distancia.png?raw=true)

# Datos

Se utilizará el siguiente conjunto de datos
![data](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/pd/pd3/data.png?raw=true)

Que al graficarlo se visualiza de la siguiente forma
![grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/pd/pd3/grafica.png?raw=true)

# Prediccion

Para realizar la predicción se utilizan los datos del conjunto de datos y en base a estos se elige la clase más presente en los K vecinos más cercanos.

Para esto tomaremos el valor:
X1 = 8.093607318 X2 = 3.365731514 Y = 1

El resultado de la predicción es:
![pred](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/pd/pd3/pred.png?raw=true)


# Archivo

[Archivo de excel](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/pd/pd3/excel.xlsx?raw=true)


