try:   
    archivo = open('prueba.txt', 'w', encoding='utf') #Si el archivo no existe lo crea, la w es opara write o escribir
    archivo.write('hola mundo, mi primer txt \n')
    archivo.write('una buena forma de aprender, esta función')
except Exception as e:
    print('Error', e)
finally: 
    archivo.close()


leer = open('prueba.txt', 'r')
#para leer una fraccion del archivo
print(leer.read(5))

#Leer una linea
print(leer.readline())
#Leer Completo
print(leer.read())

