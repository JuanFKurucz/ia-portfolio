---
pathPrefix: '/'
path: "/pd/ut3/pd5"
cover: "./blocks.jpg"
date: "2021-09-13"
title: "Análisis Discriminante Lineal utilizando Python y scikit-learn"
published: true
tags: ['Algoritmos lineales','Python']
---

En este artículo haremos proceso similar a lo que venimos haciendo en RapidMiner pero esta vez en Python.

# Datos
- [sample.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/sample.csv)
- [sports_Training.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/sports_Training.csv)
- [sports_Scoring.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/sports_Scoring.csv)

# Proceso

## Parte 1: carga de datos y preparación

![1.1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/1.1.png?raw=true)
![1.2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/1.2.png?raw=true)
![1.3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/1.3.png?raw=true)
![1.4](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/1.4.png?raw=true)

## Parte 2: entrenamiento y testing

![2.1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/2.1.png?raw=true)
![2.2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/2.2.png?raw=true)

## Parte 3: evaluación

![3.1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/3.1.png?raw=true)
![3.2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/3.2.png?raw=true)
![3.3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/3.3.png?raw=true)

## Parte 4: Regresión Logística

![4.1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/4.1.png?raw=true)
![4.2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/4.2.png?raw=true)

## Usando sport dataset

Esto mismo puede ser usado para el conjunto de datos de sport

![5.1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/5.1.png?raw=true)
![5.2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/5.2.png?raw=true)
![5.3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/5.3.png?raw=true)
![5.4](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/5.4.png?raw=true)

# Conclusión

La conclusión final es que se puede hacer lo mismo por ambas herramientas. El resultado final dio ligeramente distinto, ya que en RapidMiner se realizó un tratamiento a los datos incluyendo normalización y detección de outliers y en Python no.

# Archivos

El paso a paso del ejercicio está realizado en el notebook siguiente:
- [notebook.ipynb](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/notebook.ipynb)
- También está disponible el articulo similar realizado en RapidMiner [Utilización de Análisis Discriminante Lineal en RapidMiner](/ut/ut3/ta6)

Se puede remitir a los archivos de datos como de salida en los siguientes enlaces:
- [output_python.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/output_python.csv)
- [output_rapidminer.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/output_rapidminer.csv)