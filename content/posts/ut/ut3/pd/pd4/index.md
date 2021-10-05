---
pathPrefix: '/'
path: "/pd/ut3/pd4"
cover: "./grafica.png"
date: "2021-09-13"
title: "UT3PD4 - Trabajos Domiciliario 4"
published: true
tags: ['Practica domiciliaria','UT3','Algoritmos lineales','Regresion lineal']
---

En este ejercicio se nos pide hacer el calculo manual del algoritmo Regresion lineal con decenso por gradiente

Se tienen las siguientes preguntas:

![preguntas](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd4/preguntas.png?raw=true)

a. Se itero 78 veces para conseguir un resultado razonable, de todas formas no tan preciso. Mas iteraciones serian necesarias.
b. Esta tabla puede ser consultada en el archivo final
c. Debajo esta adjuntada la grafica de errores
d. El RMSE dio: 1,538684691
e. Se puede ver una grafica de predicciones debajo y en el archivo
f. Normalizar la entrada y reducir los outliers mejoraria la prediccion del algoritmo, de todas formas tenemos pocos casos de ejemplo de training como para ppoder validar si esta funcionando realmente o no.

Primero se nos pide graficar los datos:

![grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd4/grafica.png?raw=true)

A continuacion podemos ver estos datos:
![data](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd4/data.png?raw=true)

Y a continuacion podemos ver ciclos de entrenamiento del modelo:
![iteration](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd4/iteartions.png?raw=true)


Y la grafica de errores:
![errores](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd4/error.png?raw=true)


Probando el modelo entrenado en nueva data nunca vista podemos ver la siguiente prediccion:
![prediction](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd4/prediction.png?raw=true)


Todos estos valores y calculos pueden ser vistos en el siguiente archivo:

- [ut3pd2.xlsx](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/ut3pd2.xlsx)