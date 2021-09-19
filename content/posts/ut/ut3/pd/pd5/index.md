---
pathPrefix: '/'
path: "/pd/ut3/pd5"
cover: "./blocks.jpg"
date: "2021-09-13"
title: "UT3PD5 - Análisis Discriminante Lineal utilizando Python y scikit-learn"
published: true
tags: ['Practica domiciliaria','UT3','Algoritmos lineales']
---

En este ejercicio se nos pide hacer un proceso similar a lo que venimos haciendo en RapidMiner pero esta vez en Python.

El paso a paso del ejercicio está realizado en el notebook siguiente:

- [UT03_PD5.ipynb](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/UT03_PD5.ipynb)
- También está disponible el ejercicio similar realizado en RapidMiner [ut03ta6.rmp](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/ut03ta6.rmp)

Se puede remitir a los archivos de datos como de salida en los siguientes enlaces:

Datos:
- [sample.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/sample.csv)
- [sports_Training.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/sports_Training.csv)
- [sports_Scoring.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/sports_Scoring.csv)

Outputs:
- [output_python.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/output_python.csv)
- [output_rapidminer.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/output_rapidminer.csv)

La conclusión final es que se puede hacer lo mismo por ambas herramientas. El resultado final dio ligeramente distinto, ya que en RapidMiner se realizó un tratamiento a los datos incluyendo normalización y detección de outliers y en Python no.