#manejo de Error en Pytho

result = None
try:
    result = 10/'0'

except TypeError as e:
     print('Error: %s' % e)
except BaseException as e:
    print('Error: %s' % e)
finally:
    print(result)


#Craar una clase de error

class Error(BaseException):

    def __init__(self,message):
        self.message = message

try:
    a = 5
    b = 5
    if a == b:
        raise Error('Los numeros Son iguales')
except Exception as e:
    print('Error: %s' % e)

