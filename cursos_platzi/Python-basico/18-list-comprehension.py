numbers = [1,2,3,4,5,6,7,8,9,10]
print(numbers)

#forma rapida de hacer un arreglo nuewo sin al app
numbers2 = [element*2 for element in numbers]

print(numbers2)

#tambien se le puede agregar sintaxis

numbers3 = [element for element in numbers if element % 2 == 0]
print(numbers3)