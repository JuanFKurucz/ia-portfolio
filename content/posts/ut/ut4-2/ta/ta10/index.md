---
pathPrefix: '/'
path: "/ut/ut4-2/ta10"
cover: "./pipeline.png"
date: "2021-10-29"
title: "Operadores de selección de atributos en RapidMiner"
published: true
tags: ['Algoritmos no lineales','Selección de Atributos','RapidMiner','Iris Dataset','Forward Selection','Backward Elimination','Evolutivo','Sonar Dataset','Performance','Cross Validation','Naive bayes']
---

En este artículo se busca utilizar los diferentes operadores de selección de atributos en RapidMiner

# Datos

Para esta prueba utilizaremos el conjunto de datos `Sonar` provistos en la interfaz de RapidMiner, este es un conjunto de datos que contiene 61 atributos contando la variable objetivo. Por lo cual se presta para realizar una selección de atributos.

# Pipeline

Se genero el siguiente pipeline para probar los diferentes operadores
![pipeline](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta10/pipeline.png?raw=true)
![pipeline2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta10/pipeline2.png?raw=true)
![pipeline3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta10/pipeline3.png?raw=true)

# Resultados

## Sin selección de atributos

La performance sin selección de atributos obtuvo los siguientes resultados:
![performance1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta10/performance1.png?raw=true)

## Forward selection

La performance obtuvo los siguientes resultados:
![performance2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta10/performance2.png?raw=true)

Tomando en cuenta los siguientes atributos: 12, 17, 15, 18

## Backward Elimination

La performance obtuvo los siguientes resultados:
![performance3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta10/performance3.png?raw=true)

Tomando en cuenta todos los atributos menos 3, 14, 20, 36, 47, 48, 52, 59

## Evolutivo

La performance obtuvo los siguientes resultados:
![performance4](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta10/performance4.png?raw=true)

Tomando en cuenta los atributos: 1, 46, 11, 12, 15, 16, 17, 21, 24, 26, 27, 30, 31, 33, 34, 36, 38, 39, 40, 42, 43, 45, 48, 49, 54, 55, 57

# Conclusiones

Como se puede ver, utilizar selección de atributos con cross validation nos puede dar una mejora en los resultados obtenidos.

# Archivos

[Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta10/ut4-ta10.rmp?raw=true)