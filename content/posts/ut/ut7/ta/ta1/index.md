---
pathPrefix: '/'
path: "/ut/ut7/ta1"
cover: "./pipeline.png"
date: "2021-11-19"
title: "Métricas y evaluación de modelos en clasificación"
published: true
tags: ['Ajuste, evaluación y sintonía de modelos','RapidMiner','Accuracy','False Positive','False Negative','True Positive','True Negative','Sensitivity','Specificity','AUC','ROC','Validacion','Lift Chart','Matriz de confusion','Precision','Recall']
---

En este artículo se explorarán las métricas y formas de evaluación que tenemos en RapidMiner para una problemática de clasificación

# Datos

Para comenzar, utilizaremos datos generados aleatoriamente con el operador de RapidMiner llamado `Generate Direct Mailing Data`. Este nos crea una tabla de datos que contiene los siguientes atributos:
- label
- name
- age
- lifestyle
- zip code
- family status
- car
- sports
- earnings

![data](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut7/ta/ta1/data.png?raw=true)

Tomaremos el atributo label como nuestra variable objetivo del problema, la cual nos dice si se tuvo respuesta de esta persona o no.

# Pipeline

Se usará el siguiente pipeline en RapidMiner:
![pipeline](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut6/ta/ta3/pipeline.png?raw=true)

# Analisis

En el siguiente apartado mostraremos los resultados de cada métrica y explicaremos su uso.

## Accuracy

![accuracy](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut7/ta/ta1/accuracy.png?raw=true)

El accuracy es la fracción de predicciones correctas, es decir cuántos casos evaluó correctamente el modelo de todos los casos que tenemos.

Como vemos en la imagen obtuvimos un 77,96% de accuracy.

A su vez la imagen nos muestra una matriz de confusión donde podemos ver más información.

### Matriz de confusion

![confussion_matrix](https://2.bp.blogspot.com/-EvSXDotTOwc/XMfeOGZ-CVI/AAAAAAAAEiE/oePFfvhfOQM11dgRn9FkPxlegCXbgOF4QCLcBGAs/s1600/confusionMatrxiUpdated.jpg)
Imagen tomada de: [What is Confusion Matrix and Advanced Classification Metrics?](https://manisha-sirsat.blogspot.com/2019/04/confusion-matrix.html)

Una matriz de confusión es una matriz la cual nos muestra los valores que el modelo predijo y en qué situaciones están estos, es decir si son categorizados como True Positives, True Negatives, False Positive y False Negatives. Estos conceptos los veremos más adelante.

### Precision

La precisión es una métrica calculada en base a la siguiente fórmula: TP/(TP+FP), donde TP son los True positivo, y FP los False Positive, mas adelante explicaremos estos en detalle, pero lo que busca la métrica de precisión es la frecuencia con la cual se predijo correctamente la variable objetivo. Es decir, que tan bien se clasificó como respuesta los mensajes entre todos los clasificados como respuesta.

### Recall

El recall es lo que veremos más adelante como la Sensitivity.

## AUC y ROC

![auc](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut7/ta/ta1/auc.png?raw=true)

AUC es una métrica de evaluación la cual nos muestra todos los valores de umbral posibles a tomar en cuenta. Esto nos estará dando información de que tan bien se evalúa de que un ejemplo positivo sea realmente positivo contar que un ejemplo positivo sea evaluado como negativo en diferentes umbrales.

## False positive

Las métricas de False Positive en este caso dieron que 408 ejemplos fueron tomados como tales (como se ve en la matriz de confusión de arriba). El caso de False Positive es clasificar una clase no positiva como positiva, en este caso, es decir que una persona de la cual no se tuvo respuesta clasificarla como que se tuvo, esto sería un falso positivo para la variable objetivo de tener respuesta.

## False negative

Las métricas de False Negative en este caso dieron que 121 ejemplos fueron tomados como tales (como se ve en la matriz de confusión de arriba). El caso de False Negative es clasificar una clase positiva como no positiva, en este caso, es decir que una persona de la cual se tuvo respuesta clasificarla como que no se tuvo.

## True positive

Este es el caso que buscamos, que una clase positiva, es decir un mail que se tuvo respuesta fue clasificado como tal, para esto se tuvo 632 casos.

## True negative

Este es el caso que buscamos también, que una clase no positiva sea evaluada como no positiva, para esto se tuvieron 1239 casos.

## Sensitivity

La sensibilidad es calculada como vimos más arriba en la matriz de confusión, esta es una métrica que evalúa qué tan bien se identifican correctamente un caso positivo

## Specificity

La especificidad por otro lado es que tan bien evalúa la clase negativa correctamente.

## Lift Chart

![lift](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut7/ta/ta1/lift.png?raw=true)

En la imagen de arriba podemos ver la gráfica llamada Lift Chart, la cual nos muestra cuantos elementos son correctamente evaluados mientras se va aumentando el grado de confianza con el que modelo predice.

# Archivos

- [Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut7/ta/ta1/ut7ta1.rmp?raw=true)



