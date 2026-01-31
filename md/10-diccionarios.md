# Diccionarios
Semestre 01, 2026



## Definición


Un diccionario es una estructura de datos que permite almacenar valores y referenciar los mismos utilizando llaves o claves.


También son conocidos como matrices asociativas.


Los diccionarios si son mutables al igual que las listas por lo que se pueden modificar los valores de las llaves. Pero se tiene la restricción que las llaves Si son inmutables. Esto quiere decir que una vez definida la llave esta ya no puede cambiar.


Cada llave está asociada a un valor y mediante esta se puede hacer referencia al valor en sí justo como se haría con un índice.


Un diccionario usa la notación de llaves para definirse `{}`.


```python[]
diccionario = {
    "llave": "valor"
}

diccionario = {
    "codigo": "cc2005", 
    "nombre": "Algoritmos", 
    "creditos": 6
}

diccionario = {
    "carnet": "123456", 
    "notas": [100, 90, 80, 100]
}
```


El uso de llaves facilita el desarrollo ya que es una forma más “natural” de referenciar valores.


Al igual que las listas es posible imprimir in diccionario y poder ver el contenido del mismo:


```python[]
diccionario = {
    "codigo": "cc2005", 
    "nombre": "Algoritmos", 
    "creditos": 6
}

print(diccionario)

print(diccionario["codigo"])
```



## Modificación de valores


Para modificar el valor de un atributo del diccionario se puede usar la llave para hacer la asignación:


```python[]
diccionario = {
    "codigo": "cc2005", 
    "nombre": "Algoritmos", 
    "creditos": 6
}

diccionario["creditos"] = 4

print(diccionario)
```



## Adición de elementos


Para crear un nuevo elemento basta con crear una nueva llave:


```python[]
diccionario = {
    "codigo": "cc2005", 
    "nombre": "Algoritmos", 
    "creditos": 6
}

diccionario["catedratico"] = "Ludwing Cano"

print(diccionario)
```



## Eliminar elementos


Para eliminar un elemento se puede hacer uso de la palabra reservada `del`:


```python[]
diccionario = {
    "codigo": "cc2005", 
    "nombre": "Algoritmos", 
    "creditos": 6
}

del diccionario["creditos"]

print(diccionario)
```



## Errores comunes


Si se trata de acceder a una llave que no existe para tratar de leer el valor Python da error:


```python[]
diccionario = {
    "codigo": "cc2005", 
    "nombre": "Algoritmos", 
    "creditos": 6
}

print(diccionario["seccion"])
```



## Funciones disponibles


https://docs.python.org/3/tutorial/datastructures.html#more-on-lists


### Crear un diccionario

Un diccionario almacena pares **llave: valor**.

```python
diccionario = {
    "codigo": "cc2005", 
    "nombre": "Algoritmos", 
    "creditos": 6
}
```


### Obtener el valor de una llave con `.get()`

Devuelve el valor asociado a una llave.

```python
print(diccionario.get("codigo"))
# cc2005
```


### `.get()` con valor por defecto

Permite especificar un valor alternativo si la llave no existe.

```python
print(diccionario.get("seccion", -1))
# -1
```


### `.keys()`

Devuelve todas las **llaves** del diccionario como un objeto iterable.

```python
llaves = diccionario.keys()
print(llaves)
# dict_keys(['codigo', 'nombre', 'creditos'])
```


### Convertir las llaves a lista

Puedes transformar el objeto iterable en una lista.

```python
llaves = list(llaves)
print(llaves)
# ['codigo', 'nombre', 'creditos']
```


### `.values()`

Devuelve todos los **valores** del diccionario como un objeto iterable.

```python
valores = diccionario.values()
print(valores)
# dict_values(['cc2005', 'Algoritmos', 6])
```


### Convertir los valores a lista

Igual que con las llaves, se pueden convertir a una lista.

```python
valores = list(valores)
print(valores)
# ['cc2005', 'Algoritmos', 6]
```


### `.update()`

Combina dos diccionarios, agregando o actualizando llaves y valores.

```python
diccionario2 = {
    "seccion": 600, 
    "catedratico": "Ludwing Cano"
}

diccionario.update(diccionario2)

print(diccionario)
```


### Mostrar el diccionario completo

Permite visualizar todo el contenido del diccionario.

```python
print(diccionario)
# {'codigo': 'cc2005', 'nombre': 'Algoritmos', 'creditos': 6}
```


### Eliminar una llave específica

Permite borrar un elemento del diccionario mediante su llave.

```python
del diccionario["creditos"]
print(diccionario)
# {'codigo': 'cc2005', 'nombre': 'Algoritmos'}
```


### Verificar si una llave existe

Usa el operador `in` para comprobar si una llave está presente.

```python
print("nombre" in diccionario)
# True
```
