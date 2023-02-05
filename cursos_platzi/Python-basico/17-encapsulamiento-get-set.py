#Encapsulamiento con Python, metodos get y set


class Persona:
    def __init__(this, nombre, apellidos, edad):
        this._nombre = nombre
        this.apellidos = apellidos
        this.edad = edad

    @property
    def nombre(this):
        return this._nombre