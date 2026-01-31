# Estructuras de Repetición
Semestre 01, 2026



## Definición

Una estructura cíclica permite repetir las instrucciones definidas en un bloque de código. Lo que hace que los programas sean más optimizados.



## Tipos

Existen 2 tipos de estructuras cíclicas:

1. Por condición
2. Por cantidad de repeticiones


Para ambos tipos se utiliza una variable de control. Esta variable es la que guarda el valor de la iteración o la que se evalúa en la condición.



## Diagrama


Diagrama de flujo de las estructuras de repetición:

<img src="../assets/img/loop.jpg" alt="Diagrama ciclo" width="250" />




## Ciclos por condición


Los ciclos por condición son aquellos que se repiten mientras la condición se cumple. Se detienen cuando la condición deja de cumplirse.


Existen 2 variantes: con condición al inicio (while) y con condición al final (do while).


### While


Como su nombre lo indica en español el ciclo While o Mientras se ejecuta siempre y cuando la condición sea verdadera.


Estos ciclos se utilizan generalmente cuando no sabemos cuantas veces se va a repetir el bloque de código.


En este ciclo la condicional se encuentra primero.

```python[]
while condicion:
    # inicia bloque de codigo
```


```python[]
x = 1

while x <= 10:
    print("El valor de x es:", x)
    x = x + 1
```

¿Cuantas veces se imprime el valor de x?

¿Qué pasa si nunca hacemos el `x = x + 1` ?



## Ciclos por cantidad de repeticiones


Los ciclos por cantidad de repeticiones son aquellos que se repiten una cantidad definida de veces. Generalmente para cada elemento de un listado.


Estos ciclos se utilizan generalmente cuando se sabe cuantas veces exactamente se quiere que se repita el bloque de código.


### Función Range


La función range sirve para generar un listado de valores que de puede utilizar para definir cuantas veces se va a repetir un ciclo.


Esta función puede tener 3 firmas:


Un solo parámetro: `range(10)`
    
- El 10 es el valor final (no se incluye). 
- Esta lista inicia en 0.
    
```python[]
range(10)

# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```


Dos parámetros: `range(10, 20)`
    
- El 10 es el valor de inicio (si se incluye).
- El 20 es el valor del final (no se incluye).
    
```python[]
range(10, 20)

# [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
```


Tres parámetros: `range(10, 20, 2)`
    
- El 10 es el valor de inicio (si se incluye).
- El 20 es el valor del final (no se incluye).
- El 2 es el paso o step.
    
```python[]
range(10, 20, 2)

# [10, 12, 14, 16, 18]
```


Con la lista que la función range provee es posible implementar un ciclo.


### Ciclo For


El ciclo for es un ciclo que se ejecuta una cantidad definida de veces usando una función range como entrada.


```python
lista = range(10)

for i in lista:
	print(i)
```


```python
for i in range(10):
	print(i)
```