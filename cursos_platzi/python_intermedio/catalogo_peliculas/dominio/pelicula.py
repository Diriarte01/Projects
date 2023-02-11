#Clases generadora de peliculas

class Pelicula:

    def __init__(self, nombre):
        self.nombre = nombre
    
    def __str__(self) -> str:
        return f'{self.nombre}'
