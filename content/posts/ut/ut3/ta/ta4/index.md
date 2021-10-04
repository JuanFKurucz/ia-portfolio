---
pathPrefix: '/'
path: "/pd/ut3/ta4"
cover: "./cover.png"
date: "2021-09-07"
title: "UT3TA4 - Trabajo de Aplicación 4"
published: true
tags: ['Trabajo de Aplicacion','UT3','Algoritmos lineales']
---

En este trabajo de aplicación se busca utilizar regresión logística en RapidMiner para atacar la problemática de un cardiólogo para el apoyo de diagnóstico en un centro de salud.

# Entendimiento del problema

![escenario](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/cover.png?raw=true)

El escenario descrito anteriormente consiste en lograr determinar los riesgos de los problemas coronarios. Específicamente lograr identificar posibles pacientes que puedan tener un segundo ataque cardiaco para poder prevenir estos con cambios en su estilo de vida.

# Comprensión de los datos

Se nos ofrecen los siguientes archivos de datos:
- [cardiac-training.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/cardiac-training.csv)
- [cardiac-scoring.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/cardiac-scoring.csv)

A su vez se nos otorga una descripción de los mismos:

- **Edad**: la edad en años redondeada al entero más cercano. 
- **Estado_civil**: codificado medinate un número: 0 = soltero; 1 = casado, 2 = divorciado y 3 = viudo.
- **Sexo**: 0 = femenino; 1= masculino.
- **Categoria_Peso**: el peso de la persona, categorizado en uno de tres posibles niveles: 0 = normal; 1 = sobrepeso; 2 = obeso.
- **Colesterol**: nivel de colesterol de la persona, tal como se ha registrado en el momento del tratamiento indicado cuando su más reciente ataque al corazón.
- **Manejo_stress**: un atributo binario que indica si el paciente ha participado previamente de cursos de manejo del estrés: 0 = no; 1 = si.
- **Trat_ansiedad**: valor entre 0 y 100 indicativo del nivel natural de estrés de cada persona y de su habilidad para manejar este estrés. Poco tiempo después de que la persona se recuperara de su primer ataque, se le administró un test de ansiedad natural estándar. Los valores están tabulados en incrementos de 5. Un valor de 0 indicaría que la persona nunca siente ansiedad, presión o estrés en ninguna situación, mientras que un valor de 100 indicaría que la persona vive en un estado continuo de sobrecarga e incapaz de lidiar con su situación.
- **2do_Ataque_Corazon**: Este atributo existe solamente en el dataset de entrenamiento. Es la variable objetivo o de predicción (“label” en RM). En el dataset de entrenamiento, este atributo contiene “SI” para aquellos individuos que han sufrido un segundo ataque al corazón, y “no” en caso contrario.

Las descripciones de los atributos parecen ser suficientes como para indagar en profundidad, podemos ver que la mayoría son atributos polinomiales o binomiales, y en este caso tenemos solamente un valor continuo para la edad.

# Ejercicio 1

## 1. Importa en RM el dataset de entrenamiento (“cardiac-training.csv”).

1. Verifica que la primera fila se configura como nombres de los atributos.
2. Setea el atributo “2do_Ataque_Corazon” de acuerdo al problema
    1. ¿por qué hacemos esto?

    Se configura como 0 y 1 dado que es una problemática de regresión lineal y necesitamos números reales.

    2. Verificar que los valores posibles son efectivamente de 2 clases (si/no)
    
    ![2.2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/2.2.png?raw=true)

    Como se puede ver, solo existen dos valores.

3. Verifica que el atributo “2do_Ataque_Corazon” esté configurado como variable de
predicción, o agregar un “set role” posterior

![3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/3.png?raw=true)

4. Completa el proceso de importación de datos y agrega el dataset a un nuevo proceso principal en blanco. Renombrar el operador “retrieve” del dataset a “entrenamiento”.

## 2. Importa el archivo de test / evaluación / predicción (“cardiac-scoring.csv”).
1. Verifica que el tipo de datos de los atributos es “integer”.
    1. ¿por qué hacemos esto?
    
    Ya que todas las columnas son los inputs que tomara el modelo para poder lograr la predicción, como las anteriores eran integers, estas también lo tendrán que ser.

2. Completa el proceso de importación y renombrar el operador “retrieve” a “evaluación”

## 3. Corre el modelo y comparar los rangos de los atributos entre los datasets de entrenamiento y evaluación.

1. ¿Cómo son, comparativamente, estos rangos?
Se tienen diferentes rangos, los cuales podrían dar problemas a la hora de lograr clasificar correctamente, un escalado podría ser necesario.
2. ¿Están todos los atributos de los ejemplos de evaluación / predicción en los rangos de los atributos del dataset de entrenamiento?

    Si están

    1. ¿Por qué tenemos que verificar esto?
Para ver si es necesario rellenar con determinados valores estos atributos, o a cuáles darles más prioridad en el entrenamiento si sabemos que futuros atributos no vendrán o son más costosos de obtener.

3. ¿hay más tareas de preparación previa de los datos para hacer?

    Se podría evaluar la distribución de los datos, para normalizar y escalar bien estos.

# Ejercicio 2

![ej2.0.png](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/ej2.0.png?raw=true)
![ej2.1.png](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/ej2.1.png?raw=true)
![ej2.2.png](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/ej2.2.png?raw=true)
![ej2.3.png](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/ej2.3.png?raw=true)

# Ejercicio 3
.
## 1. Veamos la primera tupla

![ej3.1.png](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/ej3.1.png?raw=true)

Hombre, soltero, 61 años, con sobrepeso, pero el colesterol es bajo (139 y la media es 178).
- está en el medio de la clase para tratamiento de ansiedad (50) y ha participado en manejo del estrés
- el modelo nos da xx % de confianza en que la predicción “No” es correcta, lo que nos deja un (1-xx %) de duda.

###  ¿Cuál sería la decisión del Dr. García para este paciente?

Ya que existe una confianza del 91,84% de que va a tener un segundo ataque cardiaco, esta confianza es un número muy elevado por lo cual es precavido proceder con un tratamiento para evitar este 2.º ataque cardiaco.

## 2. Veamos la tupla 11

Hombre, divorciado, 66 años, está por encima de la media en todos los predictores (analizar)

![ej3.2.png](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/ej3.2.png?raw=true)

En este caso nuestro modelo predijo con 99,3% de confianza que no va a tener un 2do ataque cardiaco.

## 3. ¿Cuál sería la decisión del Dr. García para este paciente?

- ¿Cómo usar la predicción en un caso de consultoría o desarrollo de un sistema real?

Esta predicción debería ser usada como una herramienta adicional del doctor. En la cual se ingresan los atributos y se obtiene un porcentaje de confianza, si estos son elevados el doctor podrá asegurarse de una calidad de respuesta, en caso de que la confianza no sea suficiente tendrá que ir por otros caminos.

- ¿cuántos pacientes tienen predicción de ataque cardíaco? Tener en cuenta los niveles de confianza

340 pacientes tienen predicción de ataque cardiaco de un total de 690. Teniendo en cuenta que el margen de nivel de confianza es el 50%, es decir que se dice que se tiene o no un ataque cardiaco si la confianza de esto es mayor o igual  al 50%.

- ¿cómo podríamos en RM analizar la performance global del modelo?

Con una separación de validación o en caso de pocos datos con un cross validation. Lo que es seguro es que es necesario un conjunto de datos no visto por el modelo para ver como performa con datos nunca vistos.



# Archivos:

- [ta4-load-training.rmp](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/ta4-load-training.rmp)
- [ta4-all.rmp](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta4/ta4-all.rmp)

