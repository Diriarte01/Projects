#los set no permite elementos duplicados, ni modificadr uno, pero si eliminar y agregar, el set no tiene un ordenamiento

planeta = {'martes', 'jupiter', 'venus', 'venus'}
print()


#hacer operaciones con conjuntos

set_a = {'col','mex', 'bol'}
set_b = {'pe', 'bol'}

set_c = set_a.union(set_b)
print(f'los elementos del conjunto son: {set_c}')

set_c = set_a.intersection(set_b)
print(set_c)
print(set_a & set_b)

set_c = set_a.difference(set_b)
print(set_c)
print(set_a - set_b)

set_c = set_a.symmetric_difference(set_b)
print(set_c)
print(set_a ^ set_b)

