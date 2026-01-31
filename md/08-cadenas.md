# Cadenas
Semestre 01, 2026



## Definición

Las cadenas son listas de caracteres que están unidos y pueden estar compuestas de letras, números, símbolos y espacios.


Son objetos `inmutables` lo que significa que al ser creadas ya no se modifica su valor (a menos que se reasigne la variable). Es posible crear nuevas cadenas a partir de cadenas existentes.


```python[]
cadena1 = "Hola"
cadena2 = "Mundo"
cadena3 = cadena1 + " " + cadena2

print(cadena1)
print(cadena2)
print(cadena3)
```


Al momento de concatenar la cadena1 y la cadena2 no modificaron su valor.



## Funciones disponibles


https://docs.python.org/3/library/stdtypes.html#string-methods


Debido a que las cadenas son objetos, tienen disponibles funciones que se pueden utilizar, algunos de los más comunes son:


### `len()`

Retorna el largo (cantidad de caracteres) de una cadena.

```python
cadena = "Hola Mundo"

largo = len(cadena)

print(largo)  # 10
```


### `.isalpha()`

Devuelve **True** si la cadena contiene solo letras (sin espacios, números ni símbolos).

```python
cadena = "HolaMundo"

print(cadena.isalpha())  # True

cadena2 = "Hola Mundo"
print(cadena2.isalpha())  # False (porque tiene un espacio)
```


### `.isdigit()`

Devuelve **True** si la cadena contiene únicamente dígitos.

```python
cadena = "12345"

print(cadena.isdigit())  # True

cadena2 = "123a"
print(cadena2.isdigit())  # False
```


### `.upper()`

Convierte todos los caracteres de la cadena a mayúsculas.

```python
cadena = "Hola Mundo"

print(cadena.upper())  # "HOLA MUNDO"
```


### `.lower()`

Convierte todos los caracteres de la cadena a minúsculas.

```python
cadena = "Hola Mundo"

print(cadena.lower())  # "hola mundo"
```


### `.title()`

Convierte la cadena a **formato de título** (cada palabra inicia con mayúscula).

```python
cadena = "hola mundo desde python"

print(cadena.title())  # "Hola Mundo Desde Python"
```


### `.count()`

Cuenta cuántas veces aparece un carácter o subcadena en la cadena.

```python
cadena = "Hola Mundo"

print(cadena.count("o"))  # 2
print(cadena.count("M"))  # 1
```


### `.replace()`

Reemplaza una subcadena por otra.

```python
cadena = "Hola Mundo"

nueva = cadena.replace("Mundo", "Python")

print(nueva)  # "Hola Python"
```


### `.find()`

Devuelve la **posición (índice)** de la primera aparición de una subcadena. Si no la encuentra, retorna `-1`.

```python
cadena = "Hola Mundo"

print(cadena.find("M"))  # 5
print(cadena.find("z"))  # -1
```


### `.rfind()`

Similar a `.find()`, pero busca desde la **derecha** (final de la cadena).

```python
cadena = "Hola Hola Mundo"

# 5 (última ocurrencia de "Hola")
print(cadena.rfind("Hola")) 
```



## Índices


Los índices ayudan a ubicar los caracteres dentro de una cadena. Funcionan como lo hace el índice de un libro en el que se guarda la posición de cierto elemento.


Los índices **siempre** inician en 0 (como todo en computación).


Para las cadenas los índices están definidos desde 0 hasta el largo de la cadena -1.


Se pueden utilizar los índices para imprimir valores de una cadena dada su posición:


```python[]
cadena = "Hola Mundo"

print(cadena[0]) # imprime el primer elemento

print(cadena[1]) # imprime el segundo elemento
```

Es posible utilizar índices negativos para imprimir las posiciones en orden inverso:

```python
cadena = "Hola Mundo"

print(cadena[-1]) # imprime el ultimo elemento
print(cadena[-2]) # imprime el penultimo elemento
```



## Recorrer cadenas


Debido a que las cadenas son listas de caracteres, esto significa que son iterables (se pueden recorrer mediante un ciclo). 


Sin usar el índice:

```python[]
cadena = "Hola Mundo"

for letra in cadena:
	print(letra)
```


Utilizando el índice:

```python[]
cadena = "Hola Mundo"

indice = 0
while indice < len(cadena):
	print(cadena[indice])
	indice += 1
```