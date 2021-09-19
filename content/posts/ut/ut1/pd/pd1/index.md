---
pathPrefix: '/'
path: "/pd/ut1/pd1"
cover: "./CRISP-DM.png"
date: "2021-08-13"
title: "UT1PD1 -Practica Domiciliaria: Introducción a ML"
published: true
tags: ['Practica domiciliaria','UT1','Introducción al Aprendizaje Automático']
---

En este caso de estudio se analizara una de las problematicas tradicionales en inteligencia artificial la cual es el estudio del conjunto de datos de Titanic para predecir que pasajeros se salvarian al momento previo de partida.

Se utilizara este caso de estudio ya que es recomendado como el mejor primer caso de estudio apra analizar y entender diferentes problematicas del rubro.

# 1. Ejercicio 1: ¿Qué es “Machine Learning”?

## Definiciones de Machine learning:

“Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.” - [Machine Learning: What it is and why it matters. (s. f.). SAS. Recuperado 12 de agosto de 2021, de https://www.sas.com/en_us/insights/analytics/machine-learning.html](https://www.sas.com/en_us/insights/analytics/machine-learning.html)


“Machine learning (ML) is the study of computer algorithms that improve automatically through experience and by the use of data.[1] It is seen as a part of artificial intelligence. Machine learning algorithms build a model based on sample data, known as "training data", in order to make predictions or decisions without being explicitly programmed to do so.[2] Machine learning algorithms are used in a wide variety of applications, such as in medicine, email filtering, speech recognition, and computer vision, where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks.” - [Wikipedia contributors. (2021, 10 agosto). Machine learning. Wikipedia. https://en.wikipedia.org/wiki/Machine_learning](https://en.wikipedia.org/wiki/Machine_learning)

“Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.” - [Education, I. C. (2021, 12 agosto). Machine Learning. IBM. https://www.ibm.com/cloud/learn/machine-learning](https://www.ibm.com/cloud/learn/machine-learning)

Como se puede ver no hay una definición única exacta de lo que es machine learning si no varias descripciones y conceptos empleados en el rubro.

## ¿Qué tiene en común y en qué se diferencia de “Inteligencia Artificial”?
Como se puede ver en las definiciones anterior, especialmente en la segunda, Machine Learning en un subconjunto de Inteligencia Artificial, es decir Machine Learning es un tipo de inteligencia Artificial y existen otros tipos de inteligencias artificiales que no son Machine Learning.

## ¿Qué tiene en común y en qué se diferencia de “Análisis Estadístico”?
Como se puede ver en la primera definición, machine learning emplea el análisis de datos, lo cual tiene en cuenta el análisis estadístico de los mismos, pero no es solo esto, sino que va más allá del análisis a emplear un resultado a partir de estos. Por ende el análisis estadístico es parte del proceso de Machine Learning.

## ¿Cómo se diferencia con Data Mining?
Data Mining es un análisis estadístico en gran cantidad de datos que muchas veces pueden o no estar fácilmente descritos, Machine Learning logra trabajar muy bien con este tipo de datos, de todas formas Data Mining usualmente es referenciado como la recolección de estos datos, en nuestro caso tomamos el resultado de mineo de datos para nuestros modelos de inteligencia artificial.

## ¿En qué se aplica?
La referencia de Wikipedia nos ofrece una lista resumida de diferentes aplicaciones que tiene Machine Learning, hoy en día no existen limitantes en donde se puede aplicar Machine Learning por ende esta lista no busca ni será exhaustiva de todas las aplicaciones que se puede tener:
1. Agricultura
2. Anatomía
3. Astronomía
4. Bancos
5. Bioinformática
6. Computer vision (identificación de elementos en imágenes y videos)
7. Detección de fraude
8. Economía
9. Análisis de mercados (financieros, ventas, etc.)
10. Diagnósticos médicos
11. Publicidades
12. Marketing
13. Otros…


# Ejercicio 2: Breve investigación de herramientas y plataformas para Machine Learning.

En base a la publiacion [11 Most Popular Machine Learning Software Tools in 2021. (2021, 5 agosto). Software Testing Help. https://www.softwaretestinghelp.com/machine-learning-tools/](https://www.softwaretestinghelp.com/machine-learning-tools/) se pudo obtener la siguiente informacion

|   Herrmienta    |   URL   |   Descripción |   Funcionalidades |   Integración |
|   -----------   |   -----------   |   -----------   |   -----------   |   -----------   |
|   RapidMiner  |   https://rapidminer.com/   |   Herramienta gráfica para validar y modelar inteligencias artificiales   |   Tratamiento de datos    |   Algoritmos, Prueba y validación  |   Embebido y Cloud |
|   Weka  |   https://www.cs.waikato.ac.nz/ml/weka/  |   Parecido a RapidMiner  |   Tratamiento de datos, Algoritmos, Prueba y validación  |   Embebido |
|   Tensorflow/Keras  |   https://www.tensorflow.org/  |   Biblioteca para aplicar algoritmos de machine learning.  |   Algoritmos, Prueba y validación  |   Anywhere|
|   Pytorch  |   https://pytorch.org/  |   Similar a tensorflow  |   Algoritmos, Prueba y validación  |   Anywhere  |
|   Scikit-learn  |   https://scikit-learn.org/  |   Similar a tensor flow con otros tipos de algoritmos | Algoritmos, Prueba y validación  |   Anywhere   |
|   fastai  |   https://www.fast.ai/  |   Biblioteca que simplifica el entrenamiento y prueba de algoritmos de machine learning  |   Algoritmos, Prueba y validación  |   Anywhere   |
|   Pentaho  |   https://www.hitachivantara.com/en-us/products/data-management-analytics.html  |   Herramienta gráfica para tratado de datos ETL, BI.  |   Tratamiento de datos  |   Embebido/Cloud   |
|   Pandas  |   https://pandas.pydata.org/  |   Biblioteca para tratar y visualizar datos  |   Tratamiento de datos  |   Anywhere   |

# Ejercicio 3: Procesos de “Data Science”

Busca información detallada del proceso CRISP-DM y realiza un breve resumen.

![CRISP-DM](https://www.datascience-pm.com/wp-content/uploads/2021/02/CRISP-DM.png)
“The CRoss Industry Standard Process for Data Mining (CRISP-DM) is a process model with six phases that naturally describes the data science life cycle. It’s like a set of guardrails to help you plan, organize, and implement your data science (or machine learning) project.” - [CRISP-DM. (2021, 5 agosto). Data Science Process Alliance. https://www.datascience-pm.com/crisp-dm-2/](https://www.datascience-pm.com/crisp-dm-2/)

CRISP-DM es un proceso de trabajo, parecido a la realidad de los procesos de proyectos de ingeniería de software, pero en este caso aplicado para proyectos de data science, donde se tiene que validar diferentes aspectos del mismo comenzando por el entendimiento del negocio y el ambiente de la problemática, seguido por el entendimiento de que datos se tiene y cómo impactan estos, después preparar estos datos, crear modelos, evaluarlos y subir a producción los resultados.

## ¿Qué otros procesos similares existen?
Otros procesos de ciclo de vida de data science son:

### TDSP Life Cycle (Team Data Science Process)

![TDSP](https://www.datascience-pm.com/wp-content/uploads/2021/02/TDSP.png)
[Team Data Science Process (TDSP). (2021, 31 julio). Data Science Process Alliance. https://www.datascience-pm.com/tdsp/](https://www.datascience-pm.com/tdsp/)

Pasos: 
1. Business Understanding
2. Data Acquisition and Understanding
3. Modeling
4. Deployment
5. Customer Acceptance

### KDD and Data Mining (Knowledge Discovery in Database)

[KDD and Data Mining. (2021, 31 julio). Data Science Process Alliance. https://www.datascience-pm.com/kdd-and-data-mining/](https://www.datascience-pm.com/kdd-and-data-mining/)

Pasos:
1. Selection
2. Pre-processing
3. Transformation
4. Data Mining
5. Interpretation/Evaluation

### SEMMA (Sample, Explore, Modify, Model, and Access)

[SEMMA. (2021, 26 julio). Data Science Process Alliance. https://www.datascience-pm.com/semma/](https://www.datascience-pm.com/semma/)

Pasos: 
1. Sample
2. Explore
3. Modify, Model
4. Access

## ¿En qué se asemejan a CRISP-DM y en qué se diferencian?
Los ciclos de vida mencionados anteriormente son respectivamente similares en algunos aspectos, cambian un poco la descripción de los procesos, pero todos se asemejan incluyendo los mismos pasos.


# Ejercicio 4: Comparación herramientas

|   Herrmienta    |   Algoritmos   |
|   -----------   |   -----------   |
|   RapidMiner  |   Logistic regression, Neural Network, Naive Bayes, Decision tree, Random Forest, Gradient boosting tree, DBSCAN, K-means, K-models, Hierarchical, Principal component analysis, Singular value decomposition  |
|   scikit-learn  |   Logistic regression, Neural network, Naive Bayes, Decision tree, Random forest, Gradient Boosting Tree, k-modes   |


# Ejercicio 5

Selecciona un dataset interesante, complejo, y que preferentemente haya sido objeto de muchas investigaciones 

## Census Income Data Set

[UCI Machine Learning Repository: Census Income Data Set. (s. f.). UCI Machine Learning repository. Recuperado 13 de agosto de 2021, de https://archive.ics.uci.edu/ml/datasets/Census+Income](https://archive.ics.uci.edu/ml/datasets/Census+Income)

### Identifica el problema que aborda 
“Abstract: Predict whether income exceeds $50K/yr based on census data. Also known as "Adult" dataset.”

El problema que aborda es intentar predecir si la fuente de ingresos supera los $50000 dólares anuales para clasificar si se considera como adulto o no.

### Estudia los atributos : tipos de datos, significado, rangos, cómo afectan a la(s) variables de predicción 
- Age
    - Tipo de dato: número continuo.
    - Rango: no explicita
    - Significado: edad del encuestado
- Workclass
    - Tipo de dato: texto
    - Rango: Private, Self-emp-not-inc, Self-emp-inc, Federal-gov, Local-gov, State-gov, Without-pay, Never-worked.
    - Significado: clasificación del trabajo del encuestado
- Fnlwgt
    - Tipo de dato: número continuo
    - Significado: final weight, el número de personas que se estima que el censo reconoce
- Education
    - Tipo de dato: texto
    - Rango: Bachelors, Some-college, 11th, HS-grad, Prof-school, Assoc-acdm, Assoc-voc, 9th, 7th-8th, 12th, Masters, 1st-4th, 10th, Doctorate, 5th-6th, Preschool.
    - Significado: la educación del encuestado
- Education-num
    - Tipo de dato: número continuo
    - Rango: no explicita
    - Significado: no explicita
- Marital-status
    - Tipo de dato: texto
    - Rango: Married-civ-spouse, Divorced, Never-married, Separated, Widowed, Married-spouse-absent, Married-AF-spouse.
    - Significado: el estado matrimonial de la persona encuestada.
- Occupation
    - Tipo de dato: texto
    - Rango: Tech-support, Craft-repair, Other-service, Sales, Exec-managerial, Prof-specialty, Handlers-cleaners, Machine-op-inspct, Adm-clerical, Farming-fishing, Transport-moving, Priv-house-serv, Protective-serv, Armed-Forces.
- Relationship
    - Tipo de dato: texto
    - Rango: Wife, Own-child, Husband, Not-in-family, Other-relative, Unmarried.
- Race
    - Tipo de dato: texto
    - Rango: White, Asian-Pac-Islander, Amer-Indian-Eskimo, Other, Black.
- Sex
    - Tipo de dato: texto
    - Rango: Female, Male.
- Capital-gain
    - Tipo de dato: número continuo
- Capital-loss
    - Tipo de dato: número continuo.
- Hours-per-week
    - Tipo de dato: número continuo.
- Native-country
    - Tipo de dato: texto
    - Rango: United-States, Cambodia, England, Puerto-Rico, Canada, Germany, Outlying-US(Guam-USVI-etc), India, Japan, Greece, South, China, Cuba, Iran, Honduras, Philippines, Italy, Poland, Jamaica, Vietnam, Mexico, Portugal, Ireland, France, Dominican-Republic, Laos, Ecuador, Taiwan, Haiti, Columbia, Hungary, Guatemala, Nicaragua, Scotland, Thailand, Yugoslavia, El-Salvador, Trinadad&Tobago, Peru, Hong, Holand-Netherlands.

### ¿Qué tipos de algoritmos de Machine Learning pueden aplicarse para resolverlo? (revisa rápidamente algunas publicaciones referenciadas)

Algunos mencionados son:
- Bayes
- Vector regression
- Clustering
- On-Line classification

# Bibliografia

1. [Machine Learning: What it is and why it matters. (s. f.). SAS. Recuperado 12 de agosto de 2021, de https://www.sas.com/en_us/insights/analytics/machine-learning.html](https://www.sas.com/en_us/insights/analytics/machine-learning.html)
2. [Wikipedia contributors. (2021, 10 agosto). Machine learning. Wikipedia. https://en.wikipedia.org/wiki/Machine_learning](https://en.wikipedia.org/wiki/Machine_learning)
3. [Education, I. C. (2021, 12 agosto). Machine Learning. IBM. https://www.ibm.com/cloud/learn/machine-learning](https://www.ibm.com/cloud/learn/machine-learning)
4. [11 Most Popular Machine Learning Software Tools in 2021. (2021, 5 agosto). Software Testing Help. https://www.softwaretestinghelp.com/machine-learning-tools/](https://www.softwaretestinghelp.com/machine-learning-tools/)
5. [CRISP-DM. (2021, 5 agosto). Data Science Process Alliance. https://www.datascience-pm.com/crisp-dm-2/](https://www.datascience-pm.com/crisp-dm-2/)
6. [Team Data Science Process (TDSP). (2021, 31 julio). Data Science Process Alliance. https://www.datascience-pm.com/tdsp/](https://www.datascience-pm.com/tdsp/)
7. [KDD and Data Mining. (2021, 31 julio). Data Science Process Alliance. https://www.datascience-pm.com/kdd-and-data-mining/](https://www.datascience-pm.com/kdd-and-data-mining/)
8. [SEMMA. (2021, 26 julio). Data Science Process Alliance. https://www.datascience-pm.com/semma/](https://www.datascience-pm.com/semma/)
9. [UCI Machine Learning Repository: Census Income Data Set. (s. f.). UCI Machine Learning repository. Recuperado 13 de agosto de 2021, de https://archive.ics.uci.edu/ml/datasets/Census+Income](https://archive.ics.uci.edu/ml/datasets/Census+Income)