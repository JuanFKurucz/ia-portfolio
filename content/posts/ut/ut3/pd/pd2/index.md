---
pathPrefix: '/'
path: "/pd/ut3/pd2"
cover: "./grafica.png"
date: "2021-09-13"
title: "Simulando el algoritmo de Regresión Logística en Excel"
published: true
tags: ['Algoritmos lineales','Regresión Logística', 'Excel']
---

En este artículo haremos el calculo manual del algoritmo Regresión logística en Excel

# Datos

Usaremos los siguientes conjuntos de datos:

- [RegresionLogistica-ds1.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/RegresionLogistica-ds1.csv)
- [RegresionLogistica-ds2.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/RegresionLogistica-ds2.csv)

# Cálculo manual de Regresión logística

El cálculo es muy similar al proceso que hemos hecho con la regresión lineal, en este caso la ecuación es

y = BO + B1 * X1 + B2 * X2

Tendremos tantas Xn como nuestras entradas.

# Visualización de datos

![grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/grafica.png?raw=true)

A continuación podemos ver estos datos:
![data](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/data.png?raw=true)

Y a continuación podemos ver ciclos de entrenamiento del modelo:
![iteration](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/iteration.png?raw=true)

Podemos ver las estadísticas de los epochs:
![errores](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/epochs.png?raw=true)


La grafica de RMSE:
![rmse](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/rmse.png?raw=true)

Y la gráfica de exactitud:
![exactitud](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/exactitud.png?raw=true)


Todos estos valores y cálculos pueden ser vistos en el siguiente archivo:

- [ut3pd2.xlsx](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/pd/pd2/ut3pd2.xlsx)

