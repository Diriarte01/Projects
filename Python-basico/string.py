name = 'Daniel'
last_name = 'Iriarte'


#tipos de concatenacion de strings en Python
name_complete = 'Hola, ' + name + ' ' + last_name
print('V1',name_complete)

name_complete = 'Hola, {} {}'.format(name, last_name)
print('V2',name_complete)

name_complete = f'Hola, {name} {last_name}'
print('V3',name_complete)