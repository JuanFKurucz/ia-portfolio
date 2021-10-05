---
pathPrefix: '/'
path: "/ta/ut2/ta1"
cover: "./rapidminer.png"
date: "2021-08-30"
title: "UT2TA1 - Trabajo de Aplicación 1"
published: true
tags: ['Trabajo de aplicacion','UT2','Tratamiento previo de los datos y fundamentos de los algoritmos de ML','RapidMiner']
---

La idea del trabajo de aplicacion es iniciarse con la exploracion de datasets.

# Ejercicio 1

Utilizar los datos de titatnic de [data.world - Titanic Disaster Dataset](https://data.world/nrippner/titanic-disaster-dataset) para responder las siguientes preguntas.

Definicion del problema de prediccion: se busca predecir si la persona embarcada sobrevira o no al momento de embarcar.

Atributos:


- survival - Survival (0 = No; 1 = Yes)

Atributo que nos dice si la persona sobrevivio o no
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

Numero del ticket del pasaje
- fare - Passenger Fare

Numero de precio del ticket
- cabin - Cabin

Cabina en la que se estaba
- embarked - Port of Embarkation (C = Cherbourg; Q = Queenstown; S = Southampton)

Lugar de embarcamiento
- boat - Lifeboat (if survived)

En el caso de supervivencia, en que bote salvavidas fue rescatado
- body - Body number (if did not survive and body was recovered)

En el caso de no supervivencia, que numero de cuerpo se le fue asignado

A continuacion podemos ver las estadisticas generadas por RapidMiner de los atributos:

![estadisticas1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/estadisticas1.png)
![estadisticas2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/estadisticas2.png)


De estas estadisticas se puede ver:
- Faltan 263 edades.
- Falta 1 passanger fare
- Faltan 1014 cabinas
- Faltan 2 puertos de embarcacion
- Faltan 823 botes salvavidas

Una visualizacion interesante es edad, passangare class y si sobrevivio o no

![visualization](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/visualization.png)

Donde podemos ver que la mayoria de la tercera clase no sobrevivio, y la gente que sobrevivio es usualmente gente joven.

# Ejercicio 2

Los errores encontrados fueron:
- Incluir botes salvavidas o numero de cuerpo, esto no tiene sentido ya que al momento de embarcacion no es posible saber esta informacion
- Es necesario remplazar los valores faltantes, en este caso se utilizo el promedio de los mismos
- Se normalizaron los datos

![preprocessing](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/preprocessing.png)

Las estadisticas resultantes son:

![estadisticas3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/estadisticas3.png)
![estadisticas4](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/estadisticas4.png)

# Ejercicio 3

Se nos indica observar la matriz de correlacion y sus pesos:


![pesos](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/weight.png)
![matriz](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/matrix.png)

Como podemos ver un factor importante a tener en cuenta es la edad del pasajero, y siguiente es el passanger fare, tambien lo sera el passanger class.

# Archivos

- [ut2ta1.rmp](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut2/ta/ta1/ut2ta1.rmp)
