---
pathPrefix: '/'
path: "/pd/ut4/pd1"
cover: "./result.png"
date: "2021-09-27"
title: "Simulando el algoritmo CART en Excel"
published: true
tags: ['Algoritmos no lineales','CART','Excel']
---
En este articulo realizaremos el proceso de aprendizaje de un modelo CART paso a paso en una planilla de Excel, aprendiendo sobre un conjunto de datos [CART-dataset.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd1/CART-dataset.csv) y realizar una   sobre un conjunto de datos de prueba posteriormente [CART-TEST.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd1/CART-TEST.csv)

# Trabajo realizado

Como se puede ver en la siguiente imagen se realizaron pruebas con diferentes puntos de división para armar el árbol, el valor resultante para el pedido finalmente (tomando como punto de división X1 < 6.6422), nos dio un valor de índice de Gini de 0, donde el árbol queda dividido a la mitad.

![Captura excel](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd1/result.png?raw=true)

A continuación los resultados de aplicar este punto de división para el conjunto de test, el cual nos da un 90% de exactitud.

![Captura excel test](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd1/result_test.png?raw=true)

[Archivo excel](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd1/gini.xlsx)
