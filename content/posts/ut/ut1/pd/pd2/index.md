---
pathPrefix: '/'
path: "/pd/ut1/pd2"
cover: "./blocks.jpg"
date: "2021-08-13"
title: "Análisis del conjunto de datos UCI - Iris Data Set"
published: true
tags: ['Introducción al Aprendizaje Automático','UCI','Iris Dataset','RapidMiner','Excel']
---

En este artículo haremos un análisis de los atributos del dataset [UCI - Iris Data Set](https://archive.ics.uci.edu/ml/datasets/Iris), para poder investigar de qué se trata el mismo.

# Información de los atributos:

|   Atributo    |   Descripción   |   Promedio   |   Desvío estándar   |   Varianza   |
|   -----------   |   -----------   |   -----------   |   -----------   |   -----------   |
|   Sepal length in cm   |   El largo del sépalo en centímetros   |  5.843333333    |   0.828066128   |  0.685693512    |
|   Sepal width in cm   |   El ancho del sépalo en centímetros   |   3.054   |  0.433594311    |   0.188004027   |
|   Petal length in cm   |   El largo del pétalo en centímetros   |  3.758666667    |  1.76442042    |   3.113179418    |
|   Petal width in cm   |   El ancho del pétalo en centímetros   |   1.198666667   |   0.763160742   |   0.582414318   |

Por último tenemos la variable objetivo:

- Class: 
    - Opciones
        - Iris Setosa
        - Iris Versicolour
        - Iris Virginica
    - Clase perteneciente, la etiqueta a buscar.
    - Cantidades:
        - Iris-setosa: 50
        - Iris-virginica: 50
        - Iris-versicolor: 50
        - Total: 150

# Análisis de estos datos usando herramientas

Para obtener los datos anteriores podemos usar diferentes herramientas, en este caso vamos a analizar los resultados de hacer esto en Excel y por otro lado en RapidMiner, con el objetivo de mostrar que los resultados son idénticos, y muchas herramientas pueden facilitarnos y acelerar nuestro trabajo:

En este primera imagen podemos ver los resultados en RapidMiner
![RapidMiner](https://raw.githubusercontent.com/JuanFKurucz/ia-portfolio/main/content/posts/ut/ut1/pd/pd2/rapidminer.png?raw=true)

Y por último tenemos el desglose de información en Excel:
![Excel](https://raw.githubusercontent.com/JuanFKurucz/ia-portfolio/main/content/posts/ut/ut1/pd/pd2/excel.png?raw=true)

# Archivos
- [Archivo excel](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut1/pd/pd2/excel.xlsx?raw=true)

