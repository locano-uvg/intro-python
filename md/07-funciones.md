# Funciones
Semestre 01, 2026



## Definición


Bloque de código que se puede invocar para realizar una tarea específica. Es una forma eficiente de realizar tareas repetitivas y ayuda a disminuir la cantidad de código a programar. 



## Ventajas


- Reduce repetición de código.
- Mejora legibilidad y mantenimiento.



## Creación de funciones


```python[]
def saludar():
    print("Hola mundo") # Esto solo en ejemplos!
```

- Se utiliza la palabra reservada **`def`**.
- Debe tener un **nombre único**.


- Puede ser invocada varias veces.

```python[]
def saludar():
    print("Hola mundo")  # Esto solo en ejemplos!

saludar()
saludar()
saludar()
```



## Parámetros


Un parámetro es una variable que se declara en la definición de una función y que sirve para recibir valores de entrada cuando la función es llamada.


Permiten que la función trabaje con datos externos.


Hacen que las funciones sean flexibles y reutilizables.


```python[]
def saludar(nombre):
    print(f"Hola {nombre}")  # Esto solo en ejemplos!

saludar("Ana") # Ana es el parámetro
```



## Retorno de valores


El retorno en una función es el valor que la función devuelve al terminar su ejecución.


Una función puede retornar un valor (número, texto, lista, objeto, etc.) o no retornar nada.


Se indica con la palabra reservada **return**.


```python[]
def cuadrado(x):
    return x * x

print(cuadrado(5))
```



## Alcance (Scope)


- Los parámetros y variables **solo viven dentro de la función**.
- No afectan al código fuera de ella.


```python[]
def suma(a, b):
    resultado = a + b
    return resultado

print(suma(3, 4))
# print(resultado)
```



## Ejemplo 1


Función para calcular promedio:

1. Definir función `promedio`.
2. Recibir lista de números.
3. Calcular suma y dividir por la cantidad.
4. Retornar el resultado.


```python[]
def promedio(n1, n2, n3):
    total = n1 + n2 + n3

    return total / 3

print(promedio(5, 10, 7))
```



## Ejemplo 2


Función que convierte grados Celsius a Fahrenheit:


```python
def celsius_a_fahrenheit(c):
    return (c * 9/5) + 32

print(celsius_a_fahrenheit(25))
```



## Parámetros por defecto


Se usan para tener un valor predeterminado en algún parámetro.


```python[]
def saludar(nombre="invitado"):
    print(f"Hola {nombre}")  # Esto solo en ejemplos!

saludar()        # Hola invitado
saludar("Luis")  # Hola Luis
```



## Buenas prácticas


- Usar **nombres descriptivos**.
- Evitar demasiados parámetros.
- Mantener funciones **cortas y claras**.
- Documentar con **docstrings**.


```python
def area_circulo(radio):
    """Calcula el área de un círculo dado su radio."""
    return 3.14159 * radio ** 2
```
