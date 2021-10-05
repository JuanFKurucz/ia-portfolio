---
pathPrefix: '/'
path: "/pd/ut3/ta2"
cover: "./residuals.png"
date: "2021-09-03"
title: "UT3TA2 - Trabajo de Aplicación 2"
published: true
tags: ['Trabajo de Aplicacion','UT3','Algoritmos lineales','Regresion lineal','RapidMiner']
---

En este trabajo de aplicación se busca utilizar regresión lineal en RapidMiner para atacar la problemática de deducir el precio de casas.

# Entendimiento del problema


El escenario consiste en lograr predecir el precio de un inmueble a partir de los atributos del mismo y su ubicacion geografica.

# Comprensión de los datos

Se nos ofrecen los siguientes archivos de datos:
[Dataset e informacion](https://archive.ics.uci.edu/ml/machine-learning-databases/housing/)

A su vez se nos otorga una descripción de los mismos:

- **CRIM**: Ratio de crímenes per cápita por ciudad
- **ZN**:  Proporción de lotes de tierra residenciales sobre 25,000 sq.ft.
- **INDUS**: Proporción de acres de negocios “non-retail” por ciudad.
- **CHAS**: Variable “dummy” Charles River (=1 si la porción de tierra está sobre el río; de otra forma 0).
- **NOX**: Concentración de óxidos nítricos (partes por 10 millones).
- **RM**: Número promedio de habitaciones por casa.
- **AGE**: Proporción de unidades ocupadas por su dueño, construidas antes de 1940.
- **DIS**: Distancia ponderada a cinco centros de empleos en Boston.
- **RAD**: Índice de acceso a autopistas.
- **TAX**: Ratio de impuestos de propiedad totales por cada USD 10,000
- **PTRATIO**: Ratio de alumno-profesor por ciudad.
- **B**: 1000(Bk - 0.63)^2 donde Bk es la proporción de gente negra por ciudad.
- **LSTAT**: Porcentaje de la población de estatus bajo.

## Variable objetivo
- **MEDV**: Mediana de valores de hogares ocupados por sus dueños (en miles de dólares).


# Ejercicio 1

- ¿Por qué se usa shuffle?
    
Para forzar que los datos estén distribuidos aleatoriamente y asi poder asegurar que no tienen un orden especifico y esperar que se obtengan datos representativos en 
- ¿Cómo funciona el operador filter examples?

Obtiene las filas del rango seleccionadas en los atributos (first example, last example) y descarta las que no están dentro de este rango
- ¿Qué parámetros podemos variar de linear regression?
  - Feature selection: categorico
    - None
    - M5 prime
    - Greedy
    - T-Test
    - Iterative T-Test
  - Alpha (opcional): numérico
  - Max iterations (opcional): numérico
  - Forward alpha (opcional): numérico
  - Backward alpha (opcional): numérico
  - Eliminate colinear features: booleano
  - Min tolerance: numérico
  - Use bias: booleano
  - Ridge: numérico
- ¿Qué hace feature selection?

Es un algoritmo que se usa para descubrir como llegar a la solución.
- ¿Cómo afecta eliminate colinear features y use bias?
  - Eliminate colinear features intenta eliminar los atributos con relaciones colineares.
  - Use bias: decide si hay que calcular un valor de intercepción o no.

# Ejercicio 2

En esta parte del ejercicio se nos pide realizar el pipeline de RapidMiner, el cual quedo de la siguiente forma:


![pipeline1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/rapidminer1.png?raw=true)

![pipeline2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/rapidminer2.png?raw=true)

# Ejercicio 3

Se nos pide observar la salida del proceso de Linear Regression:

![regression1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/linerregression.png?raw=true)

![regression2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/linerregression2.png?raw=true)

Aplicando esto con dos modelos diferentes nos dio los siguientes resultados:

## Modelo 1

Parametros
![params](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/parameters.png?raw=true)

Performance training
![performance_training](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/performance_training.png?raw=true)

Performance validation
![performance_validation](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/performance_validation.png?raw=true)

## Modelo 2

Parametros
![params](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/greedy_parameters.png?raw=true)

Performance training
![performance_training](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/greedy_performance_training.png?raw=true)

Performance validation
![performance_validation](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/greedy_performance_validation.png?raw=true)

# Ejercicio 4

Se nos pide obtener el residuo:
![residuals](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/residuals.png?raw=true)

Como podemos ver esto genera una grafica que se inclina hacia la derecha, esta derecha es cercana a 0, entre 0 y 5. Como el calculo de residuo es prediccion menos label, nos esta diciendo que esta logrando identificar casi que correctamente la variable objetivo.



# Archivos:

- [ut3ta2.rmp](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/ut3ta2.rmp)
- [UT3TA2.xlsx](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/UT3TA2.xlsx)

