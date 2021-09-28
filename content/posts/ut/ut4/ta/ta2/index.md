---
pathPrefix: '/'
path: "/pd/ut4/ta2"
cover: "./rapidminer.png"
date: "2021-09-21"
title: "UT4TA2 - Trabajo de Aplicación 2"
published: true
tags: ['Trabajo de Aplicación','UT4','Algoritmos no lineales']
---

En este trabajo de aplicación se busca utilizar árboles de decisiones en RapidMiner para atacar la problemática de una compañía de venta de dispositivos electrónicos en línea.

# Entendimiento del problema

El escenario consiste en una empresa lanzando un nuevo producto al mercado, y se quiere analizar que es lo que hace que algunas personas tomen la decisión de comprar un nuevo producto al momento de lanzamiento mientras que otras no lo hacen tan tempranamente. Se cuenta con datos de clientes que ya han comprado productos de esta forma y datos de clientes que no lo han hecho.

# Comprensión de los datos

Se nos ofrecen los siguientes archivos de datos:
- [eReader_Training.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/eReader_Training.csv)
- [eReader_Scoring.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/eReader_Scoring.csv)

A su vez se nos otorga una descripción de los mismos:

- **ID**: identificador único del cliente, numérico
- **Edad**: la edad en años redondeada al entero más cercano.
- **EstadoCivil**: “C” para los casados, “S” para todas las otras alternativas.
Sexo: F = femenino; M= masculino.
ActividadWebsite: refleja el nivel de actividad en el sitio web: Escasa, Regular o Frecuente
- **MiroElectronicos12**: indica si la persona hay mirado o no productos electrónicos en el sitio de la compañía (SI
/ NO) en el último año
- **ComproElectronicos12**: indica si la persona ha comprado o no productos electrónicos en el sitio de la
compañía en el último año (SI / NO)
- **ComproMedios18**: indica si la persona ha comprado o no productos digitales (ej: MP3) en el sitio de la
compañía en el último año y medio (SI / NO). Este atributo NO incluye libros digitales
- **ComproLibrosDigitales**: Martín cree que este atributo puede ser un muy buen indicador del comportamiento
de compra para el nuevo eReader, y por ello se lo ha separado de los demás atributos que refieren a compras.
En este caso se indica si el cliente alguna vez compró libros digitales, no se restringe sólo al último año.
- **MetodoPago**: la forma más frecuente en que el cliente ha efectuado sus pagos:
    - ransferencia bancaria
    - CuentaWebsite – el cliente ha dispuesto una tarjeta de crédito o cuenta bancaria para débito
automático en el sitio
    - TarjetaCredito – el cliente ingresa los datos de la tarjeta y autorización en cada compra
    - DebitoMensual – el cliente realiza compras regularmente y recibe una factura que puede abonar
mensualmente
- **AdopcionEReader**: este atributo existe sólo en el dataset de entrenamiento. Tiene los datos de los clientes
que han comprado eReaders de generaciones anteriores. Los que compraron dentro de una semana del
lanzamiento son registrados como “Innovadores”. Los que compraron entre una y tres semanas luego del
lanzamiento, se registran como “AdoptanteTemprano”. Luego de tres semanas, pero dentro de los primeros
2 meses, se consideran “MayoriaTemprana” y los demás, “MayoríaTardía”. Este atributo servirá como
etiqueta al aplicar el modelo al datset de evaluación. 

Las descripciones de los atributos parecen ser suficientes como para indagar en profundidad, podemos ver que la mayoría son atributos polinomiales o binomiales, y en este caso tenemos solamente un valor continuo para la edad.

# Preparación de los datos

Para la preparación de los datos se tomaron las siguientes medidas:
- Detección de outliers tomando una distancia euclídea y 10 casos, estos fueron filtrados posteriormente
- Target encoding, siendo que no es necesario estrictamente hacer esto para un modelo que usa árboles de decisión, vimos que aplicarlo mejoraba la performance en validación.
- Normalización, con todos los datos ahora numéricos se normalizaron los rangos de los mismos

A continuación se puede ver el proceso de preprocesamiento que hicimos en RapidMiner

![preprocessing](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/preprocessing.png?raw=true)

# Modelado

## Experimentación

Para ver los mejores parámetros del modelo se hizo una experimentación variando diferentes parámetros a mano, a continuación podemos ver diferentes resultados

![exp_accuracy](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/exp_accuracy.png?raw=true)
![exp_gainratio](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/exp_gainratio.png?raw=true)
![exp_giniindex](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/exp_giniindex.png?raw=true)
![exp_informationgain](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/exp_informationgain.png?raw=true)


## Modelo final

Se tomaron los siguientes parámetros finales para el modelo de decision tree:
![decision tree](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/decisiontree.png?raw=true)

Entrenar este modelo dio los siguientes resultados:

Training:
![performance_train](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/performance_train.png?raw=true)

Validation:
![performance_val](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/performance_val.png?raw=true)

El proceso completo en RapidMiner se puede ver a continuación:

![rapidminer](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/rapidminer.png?raw=true)

# Deployment


[Archivo de RapidMiner](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut4/ta/ta2/ta2.rmp)

