def sum(a=1,b=2):
    return a + b,a,b

#Este sirve para que esta parte solo ejecute cuando ejecuto este archivo y mas no cuando lo llamo como modulo
if __name__ == '__main__':
    result,a,b = sum(b=80)
    print(result)
    print(a)
    print(b)