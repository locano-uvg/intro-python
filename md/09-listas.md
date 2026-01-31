# Listas
Semestre 01, 2026



## Definición


Una lista es una estructura que puede almacenar una colección de elementos. Una lista es ordenada y cada elemento dentro de sí tiene un índice asociado.


A diferencia de las cadenas (sub tipo de listas) las listas si son mutables. Es posible modificar un elemento específico de la lista.


Las listas usan la notación de corchetes para definirse `[]`.


```python[]
lista = [1, 2, 3]
lista_vacia = []

print(lista)
print(lista_vacia)
```


Una lista puede ser `homogenea` si todos los elementos que contienen tienen el mismo tipo de datos. Una lista es `heterogenea` si su elementos contienen varios tipos de datos.


```python[]
homogenea1 = [1, 2, 3]
homogenea2 = ["a", "e", "i", "o", "u"]
homogenea3 = [3.14, 3.15, 3.16]
homogenea4 = [True, False]

heterogenea = [1, "a", 3.14, True]
```



## Funciones disponibles


https://docs.python.org/3/tutorial/datastructures.html#more-on-lists


Las listas también tienen varias funciones que se pueden aprovechar:


### `len()`

Retorna la cantidad de elementos de una lista.

```python
lista = [2, 2, 3, 4, 5, 6]

largo = len(lista)

print(largo)  # 6
```


### Suma de listas (`+`)

Concatena dos listas en una sola.

```python
lista = [2, 2, 3, 4, 5, 6]
lista2 = [9, 8, 7]

print(lista + lista2)  
# [2, 2, 3, 4, 5, 6, 9, 8, 7]
```


### Multiplicación de listas (`*`)

Repite los elementos de una lista las veces indicadas.

```python
lista = [1, 2]

print(lista * 3)  
# [1, 2, 1, 2, 1, 2]
```


### Modificar un elemento por índice

Permite cambiar el valor de un elemento en una posición específica.

```python
lista = [2, 2, 3, 4]

lista[0] = 1

print(lista)  # [1, 2, 3, 4]
```


### Slice de lista (`lista[inicio:fin]`)

Crea una sublista desde la posición `inicio` hasta `fin - 1`.

```python
lista = [2, 2, 3, 4, 5, 6]

sub_lista = lista[1:3]

print(sub_lista)  # [2, 3]
```


### Asignar con slice

Permite reemplazar varios elementos de una lista a la vez.

```python
lista = [1, 2, 3, 4, 5]

lista[1:4] = [8, 9, 10]

print(lista)  # [1, 8, 9, 10, 5]
```


### `.append()`

Agrega un elemento al final de la lista.

```python
lista = [1, 2, 3]

lista.append(4)

print(lista)  # [1, 2, 3, 4]
```


### `.insert()`

Inserta un elemento en una posición específica.

```python
lista = [1, 2, 3]

lista.insert(1, 99)

print(lista)  # [1, 99, 2, 3]
```


### `.remove()`

Elimina la **primera aparición** de un valor en la lista.

```python
lista = [1, 2, 3, 2, 4]

lista.remove(2)

print(lista)  # [1, 3, 2, 4]
```


### `del`

Elimina un elemento por su índice.

```python
lista = [10, 20, 30]

del lista[0]

print(lista)  # [20, 30]
```


### `.pop()`

Elimina y retorna el último elemento de la lista (o el índice especificado).

```python
lista = [1, 2, 3]

valor = lista.pop()

print(valor)  # 3
print(lista)  # [1, 2]
```


### `.clear()`

Elimina todos los elementos de la lista.

```python
lista = [1, 2, 3]

lista.clear()

print(lista)  # []
```


### `.sort()`

Ordena los elementos de la lista en orden ascendente (numérico o alfabético).

```python
lista = [5, 1, 4, 3]

lista.sort()

print(lista)  # [1, 3, 4, 5]
```


### `.sort(reverse=True)`

Ordena los elementos en orden descendente.

```python
lista = [5, 1, 4, 3]

lista.sort(reverse=True)

print(lista)  # [5, 4, 3, 1]
```


### `.extend()`

Agrega todos los elementos de otra lista al final (diferente de `append`, que agrega la lista como un único elemento).

```python
lista = [1, 2, 3]
lista2 = [4, 5]

lista.extend(lista2)

print(lista)  # [1, 2, 3, 4, 5]
```


### `list()` a partir de cadena

Convierte una cadena en lista de caracteres.

```python
cadena = "Hello"

nueva_lista = list(cadena)

print(nueva_lista)  # ['H', 'e', 'l', 'l', 'o']
```


### `.index()`

Devuelve la posición (índice) de la **primera aparición** de un elemento.

```python
lista = [10, 20, 30, 20]

print(lista.index(20))  # 1
```


### `.split()`

Divide una cadena en lista, usando un separador.

```python
cadena = "Hola Mundo Python"

nueva_lista = cadena.split(" ")

print(nueva_lista)  # ['Hola', 'Mundo', 'Python']
```


### `.join()`

Une los elementos de una lista en un string, separados por un delimitador.

```python
lista = ["Hola", "Mundo"]

nuevo_string = " ".join(lista)

print(nuevo_string)  # "Hola Mundo"
```



## Recorrer listas


Es posible recorrer todos los elementos de una lista usando cualquier de ambos ciclos:


for:

```python[]
lista = ["uno", "dos", "tres"]

for elemento in lista:
	print(elemento)
```


while:

```python[]
lista = ["uno", "dos", "tres"]
indice = 0

while indice < len(lista):
	print(lista[indice])
	indice += 1
```