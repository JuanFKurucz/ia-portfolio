---
pathPrefix: '/'
path: "/pd/ut3/pd5"
cover: "./blocks.jpg"
date: "2021-09-13"
title: "Análisis Discriminante Lineal utilizando Python y scikit-learn"
published: true
tags: ['Practica domiciliaria','UT3','Algoritmos lineales','Python']
---

En este articulo haremos proceso similar a lo que venimos haciendo en RapidMiner pero esta vez en Python.

El paso a paso del ejercicio está realizado en el notebook siguiente:

- [notebook.ipynb](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/notebook.ipynb)
- También está disponible el articulo similar realizado en RapidMiner [Utilización de Análisis Discriminante Lineal en RapidMiner](/ut/ut3/ta6)

Se puede remitir a los archivos de datos como de salida en los siguientes enlaces:

Datos:
- [sample.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/sample.csv)
- [sports_Training.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/sports_Training.csv)
- [sports_Scoring.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/sports_Scoring.csv)

Outputs:
- [output_python.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/output_python.csv)
- [output_rapidminer.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd5/output_rapidminer.csv)

La conclusión final es que se puede hacer lo mismo por ambas herramientas. El resultado final dio ligeramente distinto, ya que en RapidMiner se realizó un tratamiento a los datos incluyendo normalización y detección de outliers y en Python no.