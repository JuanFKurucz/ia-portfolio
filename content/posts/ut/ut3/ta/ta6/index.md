---
pathPrefix: '/'
path: "/pd/ut3/ta6"
cover: "./cover.png"
date: "2021-09-10"
title: "UT3TA6 - Trabajo de Aplicación 6"
published: true
tags: ['Trabajo de Aplicacion','UT3','Algoritmos lineales']
---

En este trabajo de aplicación se busca utilizar LDA en RapidMiner para atacar la problemática de ayudar a jóvenes atletas a decidirse por un deporte en el cual tendrán una mejor performance.

# Entendimiento del problema

![escenario](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/cover.png?raw=true)

El escenario descrito anteriormente consiste en lograr en poder determinar un deporte en el cual se espera que tengan un mejor desempeño para un atleta en específico, dependiendo de sus atributos.

# Comprensión de los datos

Se nos ofrecen los siguientes archivos de datos:
- [sports_Training.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/sports_Training.csv)
- [sports_Scoring.csv](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/sports_Scoring.csv)

A su vez se nos otorga una descripción de los mismos:


- **Edad**: edad del atleta en años (con un decimal), al momento de efectuar las pruebas
- **Fuerza**: fortaleza del participante, medida en base a una serie de ejercicios de levantamiento de pesos, y expresada en una escala de 0 (fortaleza limitada) a 10 (realizó todos los levantamientos sin dificultad). Ningún participante obtuvo 8, 9 0 10 en esto, pero algunos obtuvieron 0.
- **Velocidad**: rendimiento del participante en un test de velocidad de respuesta. Se les contabilizó el tiempo en que podían presionar botones cuando se iluminaban o cuánto tardan en saltar al sonar una bocina. Los tiempos de respuesta fueron tabulados en una escala de 0 a 6, en donde 6 indica una velocidad de respuesta extremadamente alta y 0 una muy baja. Las valoraciones de los diferentes participantes se distribuyeron en todo el rango.
- **Lesiones**: es una columna simple con valores Si / No (1 / 0) que indica si el atleta ha sufrido previamente alguna lesión que fuera suficientemente severa como para requerir cirugía u otra intervención médica importante. Las lesiones leves tratadas con hielo, estiramiento, descanso, etc., fueron registradas como 0. Las lesiones que tomaron más de tres semanas en curar, o que requirieron terapia o cirugía fueron indicadas como 1.
- **Visión**: se evaluó de dos formas: la primera fue el test habitual de escala de visión 20/20, y la segunda utilizando tecnología de seguimiento de los movimientos oculares para determinar qué tan bien los atletas podían seguir visualmente objetos. Esta prueba desafía al participante a identificar elementos que se mueven rápidamente a través de su  campo de visión, y a estimar la velocidad y dirección de esos objetos. Las evaluaciones se registraron en una escala de 0 a 4, en que el valor 4 corresponde a una visión e identificación de objetos móviles perfecta. Ningún participante obtuvo una calificación de 4; los valores variaron entre 0 y 3.
- **Resistencia**: Se aplicó a los participantes una batería de pruebas de aptitud física incluyendo carrera, ejercicio aeróbico y cardiovascular y natación. El rendimiento fue evaluado con una escala de 0 a 10, en donde el valor 10 representa la capacidad de realizar todas las tareas sin fatiga de ningún tipo. Los valores oscilaron entre 0 y 6 para los participantes. El Maestro nos ha reconocido que ni siquiera los atletas profesionales mejor entrenados serían capaces de obtener 10 en estas evaluaciones, ya que se han diseñado específicamente para probar los límites de la resistencia humana.
- **Agilidad**: calificación del participante en una serie de pruebas de su habilidad para moverse, girar, saltar, cambiar dirección, etc. Los participantes fueron evaluados con una escala de 0 a 100 en este atributo, y los valores variaron entre 13 y 80.
- **Capacidad de Decisión**: esta parte de la batería evalúa el proceso del atleta para decidir qué hacer en diferentes situaciones atléticas. Los atletas participaron en simulaciones que analizaron sus elecciones relativas o si pasar una pelota, moverse a una posición potencialmente ventajosa del campo de juego, etc. Las evaluaciones habrían de ser registradas en una escala de 0 a 100, pero el Maestro nos ha indicado que nadie que haya completado el test podría haber tenido una calificación menor que 3, ya que 3 puntos se otorgaban simplemente por participar. También nos ha indicado que tiene certeza que todos los atletas considerados participaron en este test, y sin embargo en los datos hay algunos valores menores que 3 y también algunos mayores que 100, así que sabemos que habrá que hacer un poco de preparación de los datos.
- **Deporte Primario**: este atributo indica en qué deporte se especializó cada uno de los atletas del dataset, luego de dejar la academia. Este es el atributo que el Maestro espera poder predecir para sus clientes actuales. Para los jóvenes en este estudio, este atributo será uno de 4 deportes: Fútbol, Basketball, Voleibol y Rugby. 

Las descripciones de los atributos parecen ser suficientes como para indagar en profundidad.

# Ejercicio 1

![Ejericico 1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej1.png?raw=true)

Se realizo el siguiente pipeline pedido:

![Ejericico 1 pipeline](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej1.1.png?raw=true)

Este pipeline arrojo los siguientes resultados:

![Resultado 1](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej1.2.png?raw=true)
![Resultado 2](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej1.3.png?raw=true)

Se tomó la decisión de eliminar los elementos con “CapacidadDecision” menor a 3 o mayor a 100. Y se decidió excluir 10 outliers de los datos.

En el pipeline final se eliminaron estos outliers y se normalizaron los datos

![Resultado 3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej1.4.png?raw=true)

# Ejercicio 2

En el segundo ejercicio se nos pide agregar al pipeline un modelo LDA, entrenarlo y aplicar este modelo a un conjunto de datos no vistos y ver sus resultados. Teniendo en cuenta que a este conjunto de datos no vistos habrá que aplicarle el mismo filtro hecho anteriormente al de entrenamiento.

A continuación se muestra las probabilidades a priori obtenidas por el modelo LDA entrenado:

![Resultado 4](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej2.1.png?raw=true)

El pipeline completo quedo de la siguiente forma:

![Resultado 5](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej2.2.png?raw=true)

La evaluación del conjunto de datos no visto en el entrenamiento mostró los siguientes resultados:
![Resultado 6](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej2.3.png?raw=true)
![Resultado 7](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej2.4.png?raw=true)

# Ejercicio 3

![Ejercicio 3](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/ej3.png?raw=true)

Como observación se puede ver en las imágenes de más arriba que no se incluyen valores de confianza en la salida de RM, pero se puede ver que los valores de predicción son las clases, es decir que se hace directamente un procesamiento para transformar las labels y confianza a la palabra de la clase.


# Archivos:

- [TA6.rmp](https://github.com/JuanFKurucz/ia-portfolio/blob/main/content/posts/ut/ut3/ta/ta6/TA6.rmp)


