---
pathPrefix: '/'
path: "/ta/ut2/ta1"
cover: "./weight.png"
date: "2021-08-30"
title: "Exploracion de Titanic Disaster Dataset"
published: true
tags: ['Tratamiento previo de los datos y fundamentos de los algoritmos de ML','RapidMiner','Matriz de correlación','data.world','Titanic Disaster Dataset','Normalización']
---

En este articulo, investigaremos el dataset de titatnic [data.world - Titanic Disaster Dataset](https://data.world/nrippner/titanic-disaster-dataset) para explorar diferentes conjuntos de datos conocidos.

# Definición del problema 

Se busca predecir si la persona embarcada sobrevivirá o no al momento de embarcar. Es decir, con los datos que se conocen al momento de la partida, poder deducir si la persona sobrevive al accidente o no.

# Atributos

Los atributos de este conjunto de datos son los siguientes:

- survival - Survival (0 = No; 1 = Yes)

Atributo que nos dice si la persona sobrevivió o no
- class - Passenger Class (1 = 1st; 2 = 2nd; 3 = 3rd)

Clase de lujo (o no) del pasajero
- name - Name

Nombre del pasajero
- sex - Sex

Sexo del pasajero
- age - Age

Edad del pasajero
- sibsp - Number of Siblings/Spouses Aboard

Si tiene hermanos y esposas abordo
- parch - Number of Parents/Children Aboard

Si tiene padres o hijos abordo
- ticket - Ticket Number

Número del ticket del pasaje
- fare - Passenger Fare

Número de precio del ticket
- cabin - Cabin

Cabina en la que se estaba
- embarked - Port of Embarkation (C = Cherbourg; Q = Queenstown; S = Southampton)

Lugar de embancamiento
- boat - Lifeboat (if survived)

En el caso de supervivencia, en que bote salvavidas fue rescatado
- body - Body number (if did not survive and body was recovered)

En el caso de no supervivencia, que numero de cuerpo se le fue asignado

# Estadísticas de los atributos

A continuación podemos ver las estadísticas generadas por RapidMiner de los atributos:

![estadisticas1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/estadisticas1.png?raw=true)
![estadisticas2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/estadisticas2.png?raw=true)


De estas estadísticas se puede ver:
- Faltan 263 edades.
- Falta 1 passangare fare
- Faltan 1014 cabinas
- Faltan 2 puertos de embarcación
- Faltan 823 botes salvavidas

Una visualización interesante es edad, passangare class y si sobrevivió o no

![visualization](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/visualization.png?raw=true)

Donde podemos ver que la mayoría de la tercera clase no sobrevivió, y la gente que sobrevivió es usualmente gente joven.

# Tratamiento de los datos

Los errores encontrados fueron:
- Incluir botes salvavidas o numero de cuerpo, esto no tiene sentido ya que al momento de embarcación no es posible saber esta información
- Es necesario reemplazar los valores faltantes, en este caso se utilizó el promedio de los mismos
- Se normalizaron los datos

![preprocessing](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/preprocessing.png?raw=true)

Las estadísticas resultantes son:

![estadisticas3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/estadisticas3.png?raw=true)
![estadisticas4](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/estadisticas4.png?raw=true)

# Correlaciones

Analizando la matriz de correlación y sus pesos podemos ver:


![pesos](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/weight.png?raw=true)
![matriz](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/matrix.png?raw=true)

Un factor importante a tener en cuenta es la edad del pasajero, y siguiente es el passanger fare, también lo será el passanger class.

# Archivos

- [ut2ta1.rmp](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/ut2ta1.rmp)