---
pathPrefix: '/'
path: "/ut/ut5/ta2"
cover: "./pipeline.png"
date: "2021-10-29"
title: "Evaluando diferentes tipos de clustering en RapidMiner"
published: true
tags: ['Aprendizaje no supervisado y Métodos de clustering','Clustering','RapidMiner','K-means','DBScan','Agglomerative','Top Down']
---

En este artículo se busca evaluar los diferentes tipos de clustering provistos en RapidMiner

# Datos

Para esta prueba utilizaremos el siguiente conjunto de datos:
- [CluesteringStudents](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/CluesteringStudents?raw=true)
- [CluesteringStudents.aml](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/CluesteringStudents.aml?raw=true)

# Pipeline

Se tomarán en cuenta 2 pipelines, uno con los datos raw (es decir como vienen provistos) y otro con los datos preprocesados previamente a aplicar el clustering.

## Pipeline raw
![pipeline](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/pipeline.png?raw=true)

## Pipeline pre procesado
![pipeline2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/pipeline2.png?raw=true)

# Resultados

En los siguientes puntos veremos resultados de los diferentes clusters

## Pipeline raw

Comencemos por los clusters armados sin datos pre procesados

### Agglomerative

![agglomerative](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/performance_p1_agglomerative.png?raw=true)

### K-means

![kmeans](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/performance_p1_kmeans.png?raw=true)

### Top down

![topdown](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/performance_p1_topdown.png?raw=true)


## Pipeline pre procesado

Continuemos por los clusters armados con los datos pre procesados

### Agglomerative

![agglomerative](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/performance_p2_agglomerative.png?raw=true)

### DBScan

![dbscan](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/performance_p2_dbscan.png?raw=true)

### K-means

![kmeans](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/performance_p2_kmeans.png?raw=true)

### Top down

![topdown](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/performance_p2_topdown.png?raw=true)

# Archivos

- [Archivo de RapidMiner Pipeline1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/ut5ta2ej1.rmp?raw=true)
- [Archivo de RapidMiner Pipeline2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut5/ta/ta2/ut5ta2ej2.rmp?raw=true)



