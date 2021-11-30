---
pathPrefix: '/'
path: "/ut/ut4-2/ta8"
cover: "./grafica.png"
date: "2021-10-29"
title: "Utilización de KNN en RapidMiner"
published: true
tags: ['Algoritmos no lineales','KNN','RapidMiner','Iris Dataset','UCI','Normalización','Outlier','Split data','Filtrado','Performance']
---

En este artículo se busca utilizar el algoritmo KNN en RapidMiner y ver su funcionamiento.

# Datos

Para esta prueba utilizaremos el conjunto de datos [UCI - Iris Data Set](https://archive.ics.uci.edu/ml/datasets/iris)

Los cuales cargados a RapidMiner presentan las siguientes estadísticas
![estadisticas](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta8/estadisticas.png?raw=true)

# Pipeline

Se genero el siguiente pipeline para el tratamiento de datos y modelado:
![pipeline](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta8/pipeline.png?raw=true)

![pipeline2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta8/pipeline2.png?raw=true)

En el cual podemos ver diferentes procesos:
- Normalize: se aplicó una normalización Z-transformation
- Normalize (2): se aplicó un range transformation entre 0 y 1
- Detect outliers y filter examples: se removieron 15 outliers

# Visualización

Visualización de los datos previa al preprocesamiento

![grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta8/grafica.png?raw=true)

Visualización después del preprocesamiento
![grafica2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta8/grafica2.png?raw=true)

# Resultados

Resultados para k=3 sin preprocesamiento
![performance_k3_raw](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta8/performance_k3_raw.png?raw=true)


Resultados para k=3 con preprocesamiento
![performance_k3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta8/performance_k3.png?raw=true)


Resultados para k=5 con preprocesamiento
![performance_k5](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta8/performance_k5.png?raw=true)

# Archivos

[Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta8/ut4parte2.rmp?raw=true)

