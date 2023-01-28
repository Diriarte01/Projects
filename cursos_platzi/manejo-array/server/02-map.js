const letters = ['a', 'b', 'c'];

/* El metodo map no es mutable, no modifica el array original */

const newArray = letters.map((letter)=> letter + '+++');
console.log(newArray);
console.log(letters);