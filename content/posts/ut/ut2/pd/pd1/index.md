---
pathPrefix: '/'
path: "/pd/ut2/pd1"
cover: "./rapidminer.png"
date: "2021-08-13"
title: "UT2PD1 - Procesamiento previo de los datos"
published: true
tags: ['Practica domiciliaria','UT2','Tratamiento previo de los datos y fundamentos de los algoritmos de ML']
---

# Ejercicio 1

En RapidMiner Studio, ve a la sección de Help / Tutorials, y de la parte “Prepare Data” completa
los tutoriales:
1. ”Handling Missing Values” y
2. ”Normalization and Outlier detection”

Los hallazgos encontrados gracias a estos tutoriales son que RapidMiner tiene suficientes herramientas para tratamiento de datos, selección de los mismos y diferentes tipos de normalizaciones y arreglos.

Para el conjunto de datos tratados pudimos ver que la normalización es necesaria, y que algunos de los datos obtenidos son efectivamente outliers. A su vez podemos ver que tenemos datos faltantes en los atributos, y para algunos algoritmos será necesario tratar estos missing values para poder usarlos, tenemos diferentes formas de lograr esto.

[Archivo del tutorial "Handling Missing Values"](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/pd/pd2/ej1.rmp)
[Archivo del tutorial "Normalization and Outlier detection"](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/pd/pd2/ej2.rmp)

# Ejercicio 2

# Paso 1: obtencion del dataset

Utilizaremos el dataset [UCI - Wine Data Set](https://archive.ics.uci.edu/ml/datasets/wine) para el siguiente ejercicio.

# Paso 2: analisis del problema a resolver

Segun la informacion provista en UCI, una de las problematicas provistas a resolver es la classificacion para identificar entre 3 tipos de vinos.

|   Columna |   Tipo    |   Valores faltantes   |   Minimo  |   Maximo  |   Promedio    |
|   -----------   |   -----------   |   -----------   |   -----------   |   -----------   |   -----------   |
|   class   |   Integer |   0   |   1   |   3   |   1.94    |
|   alcohol   |   Real |   0   |   11.03   |   14.83   |   13.00    |
|   malic_acid   |   Real |   0   |   0.74   |   5.80   |   2.34    |
|   ash   |   Real |   0   |   1.36   |   3.23   |   2.37    |
|   alcalinity_ash   |   Real |   0   |   10.60   |   30.00   |   19.49    |
|   magnesium   |   Integer |   0   |   70   |   162   |   99.74    |
|   total_phenols   |   Real |   0   |   0.98   |   3.88   |   2.30    |
|   flavanoids   |   Real |   0   |   0.34   |   5.08   |   2.03    |
|   nonflavanoid_phenols   |   Real |   0   |   0.13   |   0.66   |   0.36    |
|   proanthocyanins   |   Real |   0   |   0.41   |   3.58   |   1.59    |
|   color_intensity   |   Real |   0   |   1.28   |   13   |   5.06    |
|   hue   |   Real |   0   |   0.48   |   1.71   |   0.96    |
|   od_diluted_wines   |   Real |   0   |   1.27   |   4.00   |   2.61    |
|   proline   |   Integer |   0   |   278   |   1680   |   746.89    |

Aplicando un algoritmo para detectar outliers por distancia sin editar los datos podemos detectar 10 de estos como outliers.

Se crearon dos flujos de datos como se muestra en la siguiente imagen:

![Pipeline](https://raw.githubusercontent.com/JuanFKurucz/ia-portfolio/main/content/posts/ut/ut2/pd/pd1/pipeline.png)

Los resultados de performance fueron los siguientes;

Para los datos no arreglados:
![Pipeline](https://raw.githubusercontent.com/JuanFKurucz/ia-portfolio/main/content/posts/ut/ut2/pd/pd1/untouched.png)

Para los datos que se hicieron arreglos:
![Pipeline](https://raw.githubusercontent.com/JuanFKurucz/ia-portfolio/main/content/posts/ut/ut2/pd/pd1/fixed.png)

Se puede ver que para este caso los datos no tocados dieron mejores, pero esto puede ser por el split actual de datos o porque el modelo generado en el segundo caso es actualmente más genérico (generaliza más) que el primero provisto.

Puede que de todas formas el algoritmo de Naive Bayes no requiera modificaciones tan especificas de esta información y las resuelva internamente de otras formas.

[Archivo del pipeline de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/pd/pd1/pipeline.rmp)