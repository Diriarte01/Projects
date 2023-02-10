class Orden:
    contador_ordenes = 0

    def __init__(self, computadoras):
        Orden.contador_ordenes += 1
        self._id_orden = Orden.contador_ordenes
        self._computadoras = computadoras
   
    def agregar_computadora(self,computadora):
        self._computadoras.append(computadora)

    def __str__(self):
        computadoras_str = ''
        for comp in self._computadoras:
            computadoras_str += comp.__str__()
           
        return f'''
              Orden: {self._id_orden}
              computadoras: {computadoras_str}
        '''