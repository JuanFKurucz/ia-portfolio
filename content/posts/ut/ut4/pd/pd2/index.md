---
pathPrefix: '/'
path: "/pd/ut4/pd2"
cover: "./plot.png"
date: "2021-09-27"
title: "Utilizando KNIME para árboles de decisión"
published: true
tags: ['Algoritmos no lineales','Arbol de decision','KNIME']
---

En este articulo se estudiara el pipeline creado en KNIME el cual puede ser consultado [How to Use the Simple Regression Tree](https://hub.knime.com/knime/spaces/Examples/latest/04_Analytics/05_Regressions/01_Learning_a_Simple_Regression_Tree~Ko5y95_spbdxsW5i)

# Estudio del modelo

El proyecto implementa un pipeline de entrenamiento y evaluación de un modelo de regresión tomando como atributo objetivo el petal_width (ancho del pétalo) y el resto de los atributos como atributos de entrenamiento.

# Propiedades del operador “File Reader”.

Este operador carga el conjunto de datos de IRIS de una ruta provista por knime. Es similar al operador de Retrieve de RapidMiner, en este mismo se pueden realizar operaciones similares como cargar un conjunto de datos desde un archivo con configuraciones específicas del mismo y seleccionar el tipo de sus columnas

## Tipos de datos de los atributos del dataset y variable de predicción

Los atributos de números (sepal_width, sepal_length, petal_width, petal_length) se definen como Number (double), la clase se define como String. No se define la variable de predicción en la carga del conjunto de datos, se define posteriormente en el modelo.

# Operador “Partitioning”

Nos ofrece hacer una partición del conjunto de datos en entrenamiento y evaluación. Por una cantidad fija de datos o un porcentaje relativo. A su vez podemos reordenar este conjunto de datos de forma aleatoria aplicando diferentes métodos.

Este operador es similar al operador de Split data, el cual tiene las mismas opciones que este.

# Operador “Simple Regression Tree Learner”

## Predictores

Soporta sepal_length, sepal_width, petal_length y petal_width

## Variables de predicción

Los tipos de predictores que soporta son numéricos.

## Algoritmo base

Utiliza un algoritmo basado en ​​"Classification and Regression Trees" (Breiman et al, 1984).

## Parámetros configurables

- Opciones de árbol, si usar separaciones binarias.
- Métodos para tratar con datos faltantes
- Limitar el número de niveles del árbol
- Establecer el mínimo de separación del tamaño del nodo
- Establecer el mínimo tamaño del nodo

## Regresión

El valor que se predice es el valor de la hoja del árbol el cual es el promedio de las variables objetivo en esa hoja.

# Operador “Simple Regression Tree Predictor”

## Entradas y salidas

Las entradas son el modelo entrenado y un conjunto de datos a evaluar, en este caso el set de test.

## Parámetros

Acepta cambiar el nombre de la columna de predicción

# Operador “Line Plot”

## Grafica de rendimiento del algoritmo AD regresión

![plot](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd2/plot.png?raw=true)

## Parámetros disponibles

Se puede asignar el límite de filas a mostrar en el plot, y una opción para ignorar columnas con un valor mayor a un valor introducido.

# Operador “Numeric Scorer?

Computa diferentes tipos de métricas como mean absolute error, mean squared error, root mean squared error, mean signed difference

## Resultados

![results](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd2/results.png?raw=true)


