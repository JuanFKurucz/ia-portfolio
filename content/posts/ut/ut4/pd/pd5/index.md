---
pathPrefix: '/'
path: "/pd/ut4/pd5"
cover: "./blocks.jpg"
date: "2021-10-08"
title: "Arboles de decision en RapidMiner vs Python Scikit Learn"
published: true
tags: ['Algoritmos no lineales','Árbol de decisión','RapidMiner','Python','Scikit-learn']
---

En este artículo se comparan los algoritmos de árboles de decisión en RapidMiner vs los encontrados en la biblioteca Scikit-learn de Python.

Se evaluaran los siguientes puntos:
- Tipos de problemas a que se pueden aplicar (clasificación o regresión, ejemplos)
- Algoritmos de base que utilizan
- Características requeridas a los atributos y a la variable objetivo
- Parámetros que aceptan, significado y opciones disponibles

# RapidMiner

## Tipos de problemas a que se pueden aplicar

Se puede aplicar regresión y clasificación

## Algoritmos de base que utilizan

No específica pero nombra ID3, Random Forest, CHAID y Bagging

## Características requeridas a los atributos y a la variable objetivo

Atributos nominales y numéricos

## Parámetros que aceptan, significado y opciones disponibles

- Criterion: el criterio que se aplica para separar el árbol, se puede usar information_gain, gain_ratio, gini_index, accuracy, least_square
- Maximal depth: la altura máxima del árbol
- Apply pruning: si aplicar pruning o no, es decir si cortar el árbol en algunas ramas
- Confidence: hyper parámetro para el pruning
- Apply pre pruning: específica si se debe aplicar una parada previa al maximal depth
- Minimal gain: valor de división del cálculo de ganancia para cada split de nodos
- Minimal leaf size: tamaño de ejemplos que hay en cada hoja
- Minimal size for split: tamaño requerido para separar un nodo
- Number of pre pruning alternatives: cuantas alternativas a tomar en cuenta para aplicar pre pruning.

# Python Scikit-learn

## Tipos de problemas a que se pueden aplicar

Se puede aplicar regresión y clasificación

## Algoritmos de base que utilizan

ID3, C4.5, C5.0 y CART

## Características requeridas a los atributos y a la variable objetivo

Atributos numéricos y categóricos

## Parámetros que aceptan, significado y opciones disponibles

Classification:

- Criterion: {“gini”, “entropy”}, igual que en RapidMIner
- Splitter {“best”, “random”} la estrategia usada para separar cada nodo
- Max_depth: igual que en rapidminer
- Min_samples_split: igual que en rapidminer
- Min_samples_leaf: igual que en rapidminer
- Min_weight_fraction_leaf: el mínimo peso requerido para ser una hoja
- Max_features cantidad de características consideradas para conseguir el mejor split
- Random_state: establece el factor o semilla randomica
- Max_leaf_nodes: cantidad de hojas
- Min_impurity_decrease: participa en el cálculo impureza par realizar el split
- Class_weight: pesos relativos de clase para darle ponderación a cada clase.
- Ccp_alphanon-negative: parámetro de complejidad para aplicar pruning

Regression:
- criterion{“squared_error”, “mse”, “friedman_mse”, “absolute_error”, “mae”, “poisson”}: igual que rapidminer
- Max_depth: igual que en rapidminer
- Min_samples_split: igual que en rapidminer
- Min_samples_leaf: igual que en rapidminer
- Min_weight_fraction_leaf: el mínimo peso requerido para ser una hoja
- Max_features cantidad de características consideradas para conseguir el mejor split
- Random_state: establece el factor o semilla randomica
- Max_leaf_nodes: cantidad de hojas
- Min_impurity_decrease: participa en el cálculo impureza par realizar el split
- Ccp_alphanon-negative: parámetro de complejidad para aplicar pruning

# Conclusiones

Como conclusión podemos ver que ambos contienen los mismos parámetros y aplican algoritmos parecidos.

