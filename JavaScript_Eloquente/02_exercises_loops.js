/**
Escribe un bucle que realice siete llamadas a console.log para mostrar el siguiente triángulo:
    #
    ##
    ###
    ####
    #####
    ######
    #######
 * 
 */
const serie = () =>{
    let response = '';
    const symbole = '#'
    for (let i = 1; i <= 7; i++){
        response += symbole.repeat(i) + ' \n';
    }
    console.log(response);
}

serie()

/**
 * FizzBuzz
Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar.

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" para los números que son divisibles solo por uno de esos).

(Esto es en realidad una pregunta de entrevista que se ha afirmado que elimina a un porcentaje significativo de candidatos a programadores. Entonces, si lo resolviste, tu valor en el mercado laboral acaba de aumentar.)
 */

const summiryze = ()=>{
    let response = '';
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            response += 'FizzBuzz \n';
        }else if (i % 3 === 0){
            response += 'Fizz \n';
        }else if (i % 5 === 0){
            response += 'Buzz \n';
        }else{
            response += i +' \n';
        }
    }
    console.log(response);
}

summiryze()


/**
 * Escribe un programa que cree una cadena que represente un tablero de 8x8, usando caracteres de salto de línea para separar las líneas. En cada posición del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben formar un tablero de ajedrez.

Al pasar esta cadena a console.log debería mostrar algo como esto:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
Cuando tengas un programa que genere este patrón, define una variable size = 8 y cambia el programa para que funcione para cualquier size, generando un tablero con el ancho y alto dados.
 */

const tablero = ()=>{
    let response = '';
    for (let i = 1; i <= 8; i++){
        for (let j = 1; j <= 8; j++){
            if (i === 1 || i === 8 || j === 1 || j === 8){
                response += '#';
            }else{
                response +='';
            }
        }
        response += '\n';
    }
    console.log(response);
}

tablero()