---
pathPrefix: '/'
path: "/ut/ut4-2/ta5"
cover: "./pipeline.png"
date: "2021-10-29"
title: "Evaluación de diferentes tipos de atributos con el uso de Naive Bayes en RapidMiner"
published: true
tags: ['Algoritmos no lineales','RapidMiner','Golf Dataset','Naive bayes','Performance']
---

En este artículo se compara el uso de atributos numéricos contra atributos polinomiales con el modelo de Naive Bayes en RapidMiner

# Datos

Para esta prueba utilizaremos el conjunto de datos `Golf` provistos en la interfaz de RapidMiner. En el cual se transformaran los valores numéricos a polinomiales y en otra ocasión se dejarán como estan

# Pipeline

Se genero el siguiente pipeline:
![pipeline](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta5/pipeline.png?raw=true)

# Resultados

## Sin transformación

La performance obtuvo los siguientes resultados:
![performance_numeric](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta5/performance_numeric.png?raw=true)

## Con transformación a polinomial

La performance obtuvo los siguientes resultados:
![performance_poly](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta5/performance_poly.png?raw=true)


# Conclusiones

Como se puede ver, funciona mejor con atributos polinomiales

# Archivos

[Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4-2/ta/ta5/ta4parte2.rmp?raw=true)

