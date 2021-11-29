---
pathPrefix: '/'
path: "/pd/ut4/ta3"
cover: "./grafica.png"
date: "2021-09-24"
title: "UT4TA3 - Trabajo de Aplicación 3"
published: true
tags: ['Trabajo de aplicacion','UT4','Algoritmos no lineales','Arbol de decision','RapidMiner']
---

En este trabajo de aplicación se busca utilizar árboles de decisiones en RapidMiner utilizando la problemática anteriormente vista de una compañía de venta de dispositivos electrónicos en línea. En este caso probaremos diferentes parametros del modelo para ver su fucionamiento.

# Pruebas realizadas

En base a un arbol de decision armado en RapidMiner se probara utilizando los siguientes parametros
- Criterio: ganancia de información
- No preprunning
- No prunning
- Profundidad : -1 (todo lo que el algoritmo arme).

A continuacion se muestran los resultados de diferentes pruebas

![Calculos](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta3/calculos.png?raw=true)

Una mejor forma de visualizar estas comparaciones es graficamente:

![Grafica](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta3/grafica.png?raw=true)

En el eje X tenemos las IDS y en el eje Y tenemos el valor de accuracy para trian y val respecto con sus colores. Como se puede ver los mejores modelos estarian entre el 3, 4 y el 10.

El que obtuvo mejor valor de accuracy en validation es efecitvametne el modelo 10 que fue entrenado con los siguientes parametros:
- Se aplico preprunning
- No se aplico prunning
- Se marco una profundiad de 7
- Una ganacia minima de 0,01
- Un tamaño minimo de hoja de 1
- Un tamaño minimo de particion de 10
- 2 alternativas de preprunning


# Archivos

- [Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta3/ta3.rmp)
- [Hoja de calculos de evaluaciones](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta3/calculos.xlsx)

