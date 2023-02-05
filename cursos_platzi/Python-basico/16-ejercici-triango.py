#Ejercicio para calcualar el area de una triangulo con clases


class Rectangulo:
    def __init__(self, base, altura):
        self.base = base
        self.alltura = altura
    
    def area(self):
        return (self.base * self.alltura)


base = float(input('Por favor ingrese la base: '))
altura = float(input('Por favor ingrese la altura: '))

print(f'el area del rectangulo es : {Rectangulo(base,altura).area()}')


