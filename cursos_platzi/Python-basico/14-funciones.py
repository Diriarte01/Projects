#funciones en python

"""def mi_funcion(nombre:str):
    print(f'Hola como estas, {nombre}?')

mi_funcion('Daniel Iriarte')


def sumar (num1:int, num2:int):
    return num1 + num2

print(sumar(3,4))


def saludo (nombre:str = 'alumno'):
    print(f'Hola, bienvenido al regreso a clases {nombre}')

print(saludo())
print(saludo('Daniel Iriarte'))


#podemos mandar argumentos variables que sera iterados o recibidos como una tupla
def suma(*numeros):
    count = 0
    print(numeros)
    for i in numeros:
        count += i
    return count

print(f'La suma de los elementos es: {suma(1,2,3,4)}')

def mult(*numeros):
    count = 1
    print(numeros)
    for i in numeros:
        count *= i
    return count

print(f'La multiplicación de los elementos es: {mult(1,2,3,4)}')



#como hacer una funcion que se envie como argunmentos variables como diccionarios

def listar_terminos(**arguments):
    print(arguments)

listar_terminos(nombre='Daniel', apellido= 'iriarte');
"""
#Funciones recursivas, son funciones que se llaman ellas mismn la misma funcion

def factorial (num):
    if num == 1:
        return 1
    else:
        return num * factorial(num - 1 )

print(f'el factorial del numero 3 es {factorial(3)}')
