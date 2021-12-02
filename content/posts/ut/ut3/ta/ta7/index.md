---
pathPrefix: '/'
path: "/ut/ut3/ta7"
cover: "./blocks.jpg"
date: "2021-09-14"
title: "Utilización de Análisis Discriminante Lineal, Regresion Logistica en Python"
published: true
tags: ['Algoritmos lineales','Python','Análisis Discriminante Lineal', 'Regresión Logística','Matplotlib','Pandas','Scikit-learn']
---

En este artículo se busca realizar el mismo proceso hecho en [Utilización de Análisis Discriminante Lineal en RapidMiner](/ut/ut3/ta6) pero esta vez en Python.

# Datos
Se puede remitir a los archivos de datos como de salida en los siguientes enlaces:
- [sample.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta7/sample.csv)

# Proceso

Para lograr simular lo utilizado en RapidMiner pero esta vez en Python haremos uso de las siguientes librerias:
- Pandas
- Matplotlib
- Scikit-learn

Estas las podemos importar de la siguiente forma:

    import matplotlib
    import matplotlib.pyplot as plt
    import pandas as pd
    from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
    from sklearn.linear_model import LogisticRegression
    from sklearn.metrics import confusion_matrix, classification_report
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import LabelEncoder

A continuacion cargaremos el archivo de datos y mostraremos sus valores:

    input_file = "sample.csv"
    df = pd.read_csv(input_file, header=0)
    print(df.values)

# Archivos
El paso a paso del ejercicio está realizado en el notebook siguiente:
- [notebook.ipynb](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta7/notebook.ipynb)

Como podemos ver, podemos obtener resultados similares de ambas formas y de manera muy simple.