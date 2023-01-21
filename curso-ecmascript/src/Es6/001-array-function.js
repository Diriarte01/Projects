/**Funcion Tradicional */

function square(num){
    return num * num ;
}


/* Funcion Flecha */

const square = (nume) =>{
    return nume * nume
}

const square = nume => nume * nume

/* Caracteristicas de la funcion flcha */

/*
*   1- Si la funcion es de una sola linea, no es necesario generar un return o abrir las llaves
*   2- No aplica para superPosicion
    3- No puedes usar palabras reservadas como this, super
*/