#herencia en Python

class Persona():
    def __init__(self, name, age):
        self.__name = name
        self.__age = age
    
    @property
    def nombre(self):
        return self.__name
    
    @nombre.setter
    def nombre(self, nombre):
        self.__name = nombre

    def mostrar(self):
        return f'Hola Mi nombre es {self.__name} y tengo {self.__age} de edad'


class Alumnos(Persona):
    def __init__(self,name ,edad,codigo):
        super().__init__(name,edad)
        self.__codigo = codigo

    def mostrar(self):
        return f'{super().mostrar()} con codigo {self.__codigo}'

name = Alumnos('Daniel',26, 245485)

print(name.mostrar())