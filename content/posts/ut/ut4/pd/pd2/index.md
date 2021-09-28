---
pathPrefix: '/'
path: "/pd/ut4/pd2"
cover: "./plot.png"
date: "2021-09-27"
title: "UT4PD2 - PARTE 1 - Ejercicios Domiciliario 2"
published: true
tags: ['Practica domiciliaria','UT4','Algoritmos no lineales']
---

Modelo de árbol de decisión de regresión con KNIME.

# 3. Estudiar el modelo / workflow, describir qué es lo que hace (en un párrafo)

El proyecto implementa un pipeline de entrenamiento y evaluación de un modelo de regresión tomando como atributo objetivo el petal_width (ancho del pétalo) y el resto de los atributos como atributos de entrenamiento.

# 4. Revisar las propiedades del operador “File Reader”.

## a. Inspeccionar la data disponible y las opciones de importación del operador (hacer doble click sobre el operador).

Se carga el conjunto de datos de IRIS de una ruta provista por knime.

## b. ¿cómo se compara con los operadores homólogos de RapidMiner?

Este operador es similar al operador de Retrieve de RapidMiner, en este mismo se pueden realizar operaciones similares como cargar un conjunto de datos desde un archivo con configuraciones especificas del mismo y seleccionar el tipo de sus columnas

## c. ¿cuáles son los tipos de datos de los atributos del dataset? ¿cómo se define la variable de predicción?

Los atributos de numeros (sepal_width, sepal_length, petal_width, petal_length) se definen como Number (double), la clase se define como String. No se define la variable de prediccion en la carga del conjunto de datos, se define posterirmente en el modelo.

# 5. Revisar el operador “Partitioning”

## a. analizar las opciones que ofrece.

Nos ofrece hacer una partición del conjunto de datos en entrenamiento y evaluación. Por una cantidad fija de datos o un porcentaje relativo. A su vez podemos reordenar este conjunto de datos de forma aleatoria aplicando diferentes métodos.

## b. Compara con los operadores homólogos de RapidMiner

Este operador es similar al operador de Split data, el cual tiene las mismas opciones que este.

# 6. Analizar el operador “Simple Regression Tree Learner”

## a. ¿qué tipos de predictores soporta?

Soporta sepal_length, sepal_width, petal_length y petal_width

## b. ¿qué tipos de variables de predicción soporta?

Los tipos de predictores que soporta son numéricos.

## c. ¿qué algoritmos base utiliza?

Utiliza un algoritmo basado en ​​"Classification and Regression Trees" (Breiman et al, 1984).

## d. ¿qué parámetros permite configurar? ¿cómo funcionan?

- Opciones de árbol, si usar separaciones binarias.
- Métodos para tratar con datos faltantes
- Limitar el número de niveles del árbol
- Establecer el mínimo de separación del tamaño del nodo
- Establecer el mínimo tamaño del nodo

## e. ¿cómo realiza la “regresión”?

El valor que se predice es el valor de la hoja del árbol el cual es el promedio de las variables objetivo en esa hoja.

# 7. Analizar el operador “Simple Regression Tree Predictor”

## a. ¿cuáles son las entradas y salidas del operador?

Las entradas son el modelo entrenado y un conjunto de datos a evaluar, en este caso el set de test.

## b. ¿qué parámetros acepta?

Acepta cambiar el nombre de la columna de predicción

# 8. Analizar el operador “Line Plot”

## a. Observar cómo se grafica el rendimiento del algoritmo AD regresión

![plot](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd2/plot.png?raw=true)

## b. Revisar los parámetros disponibles, comentar.

Se puede asignar el límite de filas a mostrar en el plot, y una opción parar ignorar columnas con un valor mayor a un valor introducido.

# 9. Analizar el operador “Numeric Scorer?

## a. ¿cómo funciona?

Computa diferentes tipos de métricas como mean absolute error, mean squared error, root mean squared error, mean signed difference

## b. ¿qué resultados obtenemos?

![results](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/pd/pd2/results.png?raw=true)
