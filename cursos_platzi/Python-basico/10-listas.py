#manejos de Listas en python

fruits = ['manzana','mango','pera','manzana']

#para contar el numero de elementos en una lista

print(len(fruits))

#para agregar un elemento de ultimo en la lista

fruits.append('mandarina')
print(fruits)

#para insertar el elemento en laguna posicion de la lista

fruits.insert(0,'papaya')
print(fruits)

#para saber el indixe de lagun elemento de la lista
print(fruits.index('manzana'))

#para saber cuantos elementos iguales hay
print(fruits.count('manzana'))

#este metodo siirve para copiar una lista sin impactar la lista vieja
fruits2 = fruits.copy()
print(fruits2)

#para unir dos Arreglos
fruits.extend(fruits2)
print(fruits)

#Para eliminar un elemento por su Valor
fruits.remove('manzana')
print(fruits)

#Eliminar todo los elemnetos de la lista
fruits.clear()
print(fruits)