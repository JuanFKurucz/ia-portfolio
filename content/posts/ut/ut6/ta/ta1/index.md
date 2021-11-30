---
pathPrefix: '/'
path: "/ut/ut6/ta1"
cover: "./pipeline.png"
date: "2021-11-12"
title: "Evaluando operadores de ensamble en RapidMiner"
published: true
tags: ['Ensambles','Naive Bayes','RapidMiner','Validation','Performance','Vote','KNN','Árbol de decisión','Iris Dataset','Bagging']
---

En este artículo se evaluaran operadores de ensamble en RapidMiner

# Datos

Para esta prueba utilizaremos el siguiente conjunto de datos de Iris provistos en la interfaz de RapidMiner

# Pipeline

Se usará el siguiente pipeline en RapidMiner:
![pipeline](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/pipeline.png?raw=true)

En el cual tenemos 3 flujos
- Validación para un ensamble de Vote, que dentro del mismo tiene 3 modelos
    - Decision Tree
    - Naive Bayes
    - k-NN
![validation1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/validation1.png?raw=true)
![vote](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/vote.png?raw=true)

- Validación para un modelo de Naive Bayes
![validation2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/validation2.png?raw=true)
- Validación para un ensamble de Bagging que dentro tiene un Decision Tree

![validation3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/validation3.png?raw=true)
![bagging](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/bagging.png?raw=true)


# Resultados

A continuación podemos ver los resultados de performance

## Vote

Los resultados del ensamble de Vote fueron:
![performance_vote](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/performance_vote.png?raw=true)


## Naive Bayes

Los resultados del modelo de Naive Bayes fueron:
![performance_naive_bayes](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/performance_naive_bayes.png?raw=true)

## Bagging

Los resultados del ensamble de Bagging fueron:
![performance_bagging](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/performance_bagging.png?raw=true)

# Archivos

- [Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta1/ut6ta1.rmp?raw=true)

