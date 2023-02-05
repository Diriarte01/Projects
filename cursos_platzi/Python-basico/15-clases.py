#clases en python

class Persona :
    def __init__(self, nombre, apellido, edad, pais):

        #Si le ṕonemos un guion bajo a la propiedad es una buena practica para que qel desarollador se pa que no debe usar ese atributo por fuera
        # de la clase        
        self._nombre = nombre

        #sil le ponnemos doble guin bajo eso hace que no se puede utilizar por fuera de la clase
        self.__apellido = apellido
        self.edad = edad
        self.pais= pais
    def mostrar_detalle(self):
        print(f'Nombre: {self._nombre}, apellido: {self.__apellido}, edad: {self.edad}, pais: {self.pais}')

people = Persona('Daniel','Iriarte',25,'colombia')

# ejemplo con uno y dos guiones bajo

#Esta Declaracion fue Ejecutada
people._nombre = 'Daniel Jose'
#Esta fue Ignorada
people.__apellido = 'Iriarte Castillo'
people.mostrar_detalle()

# Clase para generar los procesos basicos de la aritmetica

class Areitmetica:
    def __init__(self, arg1, arg2):
        self.arg1 = arg1
        self.arg2 = arg2

    def sumar(self):
        return self.arg1 + self.arg2
    
    def div(self):
        return self.arg1/self.arg2
    
    def mult(self):
        return self.arg1*self.arg2
    
    def rest(self):
        return self.arg1- self.arg2

nums = Areitmetica(4,2)
print(nums.sumar())
print(nums.div())
print(nums.mult())
print(nums.rest())

