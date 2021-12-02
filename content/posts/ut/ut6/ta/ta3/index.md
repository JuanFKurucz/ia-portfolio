---
pathPrefix: '/'
path: "/ut/ut6/ta3"
cover: "./pipeline.png"
date: "2021-11-19"
title: "Usando Random Forest y AdaBoost en RapidMiner"
published: true
tags: ['Ensambles','Random Forest','RapidMiner','Cross Validation','Performance','AdaBoost','Chronic kidney disease Dataset']
---

En este artículo se evaluarán los operadores de RandomForest y AdaBoost en RapidMiner

# Datos

Para esta prueba utilizaremos el siguiente conjunto de datos:
- [chronic_kidney_disease_full.arff](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/chronic_kidney_disease_full.arff?raw=true)
- [chronic_kidney_disease.arff](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/chronic_kidney_disease.arff?raw=true)
- [chronic_kidney_disease.info.txt](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/chronic_kidney_disease.info.txt?raw=true)

# Pipeline

Se usará el siguiente pipeline en RapidMiner:
![pipeline](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/pipeline.png?raw=true)

En el cual tenemos 2 flujos
![cross1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/cross1.png?raw=true)
![cross2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/cross2.png?raw=true)


# Resultados

A continuación podemos ver los resultados de performance

## Random Forest

Los resultados del ensamble de Random Forest fueron:
![performance_randomforest](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/performance_randomforest.png?raw=true)


## AdaBoost

Los resultados del modelo de AdaBoost fueron:
![performance_adaboost](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/performance_adaboost.png?raw=true)

# Archivos

- [Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/ut6ta3.rmp)


