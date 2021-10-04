---
pathPrefix: '/'
path: "/pd/ut4/ta6"
cover: "./grafica.jpeg"
date: "2021-09-21"
title: "UT4TA2 - Trabajo de Aplicación 6"
published: true
tags: ['Trabajo de Aplicacion','UT4','Algoritmos no lineales','SVM','RapidMiner']
---

En este trabajo de aplicación se busca utilizar el algoritmo SVM y ver su funcionamiento.

# Datos

Se nos ofrecen los siguientes archivos de datos:
- [TA6-EJ2.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/TA6-EJ2.csv)
- [TA6-EJ2-TEST.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/TA6-EJ2-TEST.csv)

# Ejercicio 2

Se nos pide graficar los datos empleados en `TA6-EJ2.csv` y se nos da esta grafica de ejemplo

![grafica-ejemplo](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta6/grafica_ejemplo.png?raw=true)

Utilizando rapidminer podemos realizar graficas de este tipo, el resultado que nos dio al cargar el conjunto y realizar el mismo grafico fue:

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

