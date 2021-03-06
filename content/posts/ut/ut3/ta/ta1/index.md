---
pathPrefix: '/'
path: "/ut/ut3/ta1"
cover: "./grafica1.png"
date: "2021-08-31"
title: "Simulando el algoritmo de Regresión Lineal en Excel"
published: true
tags: ['Algoritmos lineales','Regresión lineal','Excel']
---

En este artículo se busca utilizar regresión lineal en hojas de cálculo para entender cómo se construye este algoritmo.

# Datos

Utilizaremos el siguiente conjunto de datos de prueba

![data](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/data.png?raw=true)

# Resolucion

A continuacion veremos la resolución del problema

## Visualización de los datos
Primero para analizar este conjunto de datos mostraremos una gráfica de los mismos:
![grafico](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/grafica1.png?raw=true)

## Entrenamiento de modelo

El objetivo de entrenar el modelo es conseguir estimar los mejores coeficientes que nos brinden la predicción que buscamos de la siguiente ecuación:
y = B0 + B1 × x

Estos mejores coeficientes serán los que minimicen el error al predecir Y (la salida) a partir de X (la entrada).

Para lograr este entrenamiento podemos aplicar las siguientes ecuaciones para obtener B0 y B1:

![b1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/b1.png?raw=true)
![b0](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/b0.png?raw=true)

A partir de conocer estas ecuaciones que creamos la siguiente tabla de excel para el cálculo de estos valores:
![modelo](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/table.png?raw=true)


# Predicción en datos nunca vistos

En base a los coeficientes aprendidos, ahora podemos aplicar estos en valores nunca vistos, es decir tomando el B0 y B1 aprendidos y un nuevo X no usado anteriormente podemos predecir su valor de Y. Para esto se creó un nuevo conjunto de datos del 0 al 8, con intervalo de 0.1, esto nos dio la siguiente gráfica:

![grafica2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/grafica2.png?raw=true)


# Archivos:

- [excel_1.xlsx](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/excel_1.xlsx?raw=true)


# Aplicación en otro conjunto de datos

![grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/pd1_grafica.png?raw=true)

A continuación podemos ver un calculo primario para los parámetros:
![tabla1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/pd1_tabla1.png?raw=true)

Y a continuación podemos ver ciclos de entrenamiento del modelo:
![tabla2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/pd1_tabla2_reduced.png?raw=true)

También se pueden ver los errores obtenidos a lo largo de estos ciclos:
![errores](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/pd1_grafica2.png?raw=true)


Todos estos valores y cálculos pueden ser vistos en el siguiente archivo:

- [excel_2.xlsx](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta1/excel_2.xlsx?raw=true)


