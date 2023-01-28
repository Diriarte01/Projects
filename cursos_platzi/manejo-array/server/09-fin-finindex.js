// Devuelve un solo Valor del primer elemento que cumpla una condicion, si no consigue devuelve undefined

const numbers = [1,2,3,4,5,7,6];

const rs = numbers.find((num)=> num === 6);

// Delvuelve el index del primero que cumpla una condicion, si no consigue devuelve -1
const rsIndex = numbers.findIndex((num)=> num ===6)
console.log(rs);
console.log(rsIndex);