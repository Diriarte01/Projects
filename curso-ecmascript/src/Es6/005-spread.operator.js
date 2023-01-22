// Speread operator

let persona = {name: 'Daniel', age:25 };
let country = 'MX';

let data = {...persona, country}

console.log(data)

//rest

function sum (...values){
   let acomulador = 0;

   for( num of values){
        acomulador += num 
   }
   console.log(acomulador)
}

sum(1,2,3,4)

