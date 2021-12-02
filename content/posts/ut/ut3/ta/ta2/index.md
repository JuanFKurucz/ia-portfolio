---
pathPrefix: '/'
path: "/ut/ut3/ta2"
cover: "./residuals.png"
date: "2021-09-03"
title: "Utilización de Regresión Lineal en RapidMiner"
published: true
tags: ['Algoritmos lineales','Regresión lineal','RapidMiner','Residuo','Performance','Entrenamiento','Validación','Pipeline','Colinear features','Bias','Feature selection','UCI','Housing Dataset']
---

En este artículo se busca utilizar regresión lineal en RapidMiner para atacar la problemática de deducir el precio de casas.

# Entendimiento del problema

El escenario consiste en lograr predecir el precio de un inmueble a partir de los atributos del mismo y su ubicación geográfica.

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

# Tratamiento de los datos

En un principio, obtendremos los datos y tomaremos una muestra aleatoria de los mismos utilizando **shuffle** ya que esto fuerza a que los datos estén distribuidos aleatoriamente y así poder asegurar que no tienen un orden específico y esperar que se obtengan datos representativos.

Para poder validar correctamente el algoritmo, tendremos que dividir nuestro conjunto de datos en dos, uno para el entrenamiento y otro para validar el modelo entrenado con datos no vistos. Para esto usaremos el operador Filter Examples de RapidMiner el cual obtiene las filas del rango seleccionadas en los atributos (first example, last example) y descarta las que no están dentro de este rango

# Regresion Lineal 

El objetivo principal de este artículo es el uso de regresión lineal (linear regression) en RapidMiner, este operador contiene los siguientes parámetros:
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

## ¿Qué hace feature selection?

Es un algoritmo que se usa para descubrir cómo llegar a la solución.

## ¿Cómo afecta eliminate colinear features y use bias?

  - Eliminate colinear features intenta eliminar los atributos con relaciones colineares.
  - Use bias: decide si hay que calcular un valor de intercepción o no.

# Creando el pipeline

En esta parte del ejercicio se nos pide realizar el pipeline de RapidMiner, el cual quedó de la siguiente forma:

![pipeline1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/rapidminer1.png?raw=true)

En esta primera imagen podemos ver que obtenemos el conjunto de datos housing en el primer operador, después reordena aleatoriamente este mismo y lo filtra para dividirlo en un conjunto de datos de entrenamiento y otro de validación. Después de esto aplicamos los roles de predicción a la variable objetivo **MEDV**;

![pipeline2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/rapidminer2.png?raw=true)

Dentro del componente de Validación tenemos el modelo Linear Regression al cual se le toma una performance de entrenamiento.


# Salida del modelo

La salida del proceso de Linear Regression:

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

# Residuo

![residuals](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/residuals.png?raw=true)

Como podemos ver esto genera una gráfica que se inclina hacia la derecha, esta derecha es cercana a 0, entre 0 y 5. Como el cálculo de residuo es predicción menos label, nos está diciendo que está logrando identificar casi que correctamente la variable objetivo.

# Archivos:

- [ut3ta2.rmp](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/ut3ta2.rmp)
- [UT3TA2.xlsx](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta2/UT3TA2.xlsx?raw=true)




