#tuplas en Python, las tuplas son elementos que no se pueden modificar

numbers = (13,1,8,3,2,5,8)
new_numbers = []
for i in numbers:
    if i < 5:
        new_numbers.append(i)

print(f'los numeros menores a 5 son {new_numbers}')

#se puede trnasformar una tupla a lista

new_numbers = list(numbers)
print(f'los numeros son {new_numbers}')
