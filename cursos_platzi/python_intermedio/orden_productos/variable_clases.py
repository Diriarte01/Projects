#lVariables de Clases en Python

class Persona():
    #Definicion de variable de clases en Python
    internal_id = 0
    
    def __init__(self,nombre):
        Persona.internal_id+= 1
        self.__internal_id = Persona.internal_id
        self.__nombre = nombre

    def __str__(self):
        return f'persona [{self.__internal_id, self.__nombre}]'


persona1 = Persona('Daniel')
print(persona1)

persona2 = Persona('Daniela')
print(persona2)