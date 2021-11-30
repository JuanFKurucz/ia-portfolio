---
pathPrefix: '/'
path: "/ut/ut5/ta3"
cover: "./pipeline.png"
date: "2021-11-05"
title: "Evaluando PCA clustering en RapidMiner"
published: true
tags: ['Aprendizaje no supervisado y Métodos de clustering','PCA','RapidMiner','K-means','Selección de Atributos']
---

En este artículo se busca evaluar clustering con el previo uso de selección de atributos por PCA

# Datos

Para esta prueba utilizaremos el siguiente conjunto de datos:
- [Cereals.xls](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta3/Cereals.xls?raw=true)

# Pipeline

Se usará el siguiente pipeline en RapidMiner para evaluar los diferentes clusters en base a los atributos seleccionados
![pipeline](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta3/pipeline.png?raw=true)


# Resultados

En los siguientes puntos veremos resultados de los diferentes clusters formados por diferentes conjuntos de atributos

## Kmeans PCA

En este cluster se seleccionarlos atributos transformados por PCA
![pca](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta3/pca.png?raw=true)

## Kmeans PCA Select

En este cluster se seleccionarlos atributos tomados en cuenta para transformación de PCA

![agglomerative](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta3/pca_select.png?raw=true)

## Todos los atributos

En este cluster se tomaron todos los atributos del conjunto de datos

![topdown](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta3/all.png?raw=true)

# Archivos

- [Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta3/ta3.rmp?raw=true)