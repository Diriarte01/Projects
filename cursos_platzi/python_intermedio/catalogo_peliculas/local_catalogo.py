from dominio.pelicula import Pelicula
from servicio.catalogo_pelicula import CatalogoPeliculas as Catalogo

while True:
    try:
        print('Seleccion la funcion que desea realizar'.center(50,'-'))
        print('1) Agregar Pelicula')
        print('2) Listar Pelicula')
        print('3) Eliminar Archivo')
        print('4) Salir')
        opcion = int(input())
        if(opcion == 1):
            pelicula = Pelicula(input('Ingresa el nombre de la pelicula: '))
            Catalogo.agregar_catalogo(pelicula)
        elif(opcion == 2):
            Catalogo.listar_peliculas()
        elif(opcion == 3):
            Catalogo.eliminar()
        elif(opcion == 4):   
            print('Gracias por usar nuestra aplicación'.center(50,'-'))
            break

    except Exception as e:
        print('Opcion errada', e)
    finally:
        print(''.center(50,'-'))

