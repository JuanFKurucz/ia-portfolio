---
pathPrefix: '/'
path: "/ut/ut4-2/ta4"
cover: "./play-tennis.jpg"
date: "2021-10-22"
title: "Simulando el algoritmo de Naive Bayes en Excel"
published: true
tags: ['Algoritmos no lineales','Naive Bayes','Excel']
---

En este artículo se busca simular el algoritmo Naive Bayes en Excel.

# Datos

Para esta prueba utilizaremos el siguiente conjunto de datos:
![estadisticas](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta4/data.png?raw=true)

Y tomaremos en cuenta la siguiente red bayesiana:
![red](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta4/play-tennis.jpg?raw=true)

# Calculos

Para generar el algoritmo de Naive bayes tendremos que calcular las diferentes probabilidades de ocurrencia según cada caso, para esto comenzamos por calcular la probabilidad de la variable objetivo:

![p-jugar](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta4/p-jugar.png?raw=true)

Teniendo esto, podemos hacer el cálculo de las probabilidades para cada atributo:

![p-atributos](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta4/p-atributos.png?raw=true)

Con estas probabilidades calculadas ahora podemos inferir sobre nuevos datos de entrada.

# Archivos

[Archivo de Excel](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta4/EjemploPlayTennis.rmp?raw=true)


