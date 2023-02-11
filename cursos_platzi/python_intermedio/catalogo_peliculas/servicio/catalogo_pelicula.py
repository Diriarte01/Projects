# Clase generadora del catalogo de peliculas
import os

class CatalogoPeliculas:
    
    ruta_archiv = 'catalogo.txt'
    open(ruta_archiv, 'w')
    @staticmethod
    def agregar_catalogo(pelicula):
        print('Agregando una nueva Pelicual'.center(50,'-'))
        print(pelicula)
        archivo = open(CatalogoPeliculas.ruta_archiv, 'a')
        archivo.write(f'{pelicula}\n')
        archivo.close()
    
    @staticmethod
    def listar_peliculas():
        print('Lista el catalogo del peliculas'.center(50,'-'))
        print()
        archivo = open(CatalogoPeliculas.ruta_archiv, 'r')
        print(archivo.read())
    
    @staticmethod
    def eliminar():
        os.remove(CatalogoPeliculas.ruta_archiv)
