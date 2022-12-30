# Objetos en Python

persona = {
    'nombre':'Daniel',
    'apellidos':'Iriarte',
    'edad':25,
    'lenguajes':['python','Javascript']
}

print(persona)

persona['nombre'] = 'Daniel Jose'
persona['edad'] = 30
print(persona)
persona['lenguajes'].append('Java')
del persona['apellidos']
print(persona)
persona['lenguajes'].append('Python')