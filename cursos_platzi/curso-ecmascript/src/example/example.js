// const, let, var

/* const num = 10;
num = 20 */

// Boleans, strings, numbers, undefined, null
const ar = new Array();
let ar2 = ['6'];

const js = new Object();
let js2 = {
    name: 'johan',
    last_name: 'cruz',
};
ar.push('5')
ar.push('0')
ar.push('4')
/*ar.forEach((val)=> console.log(val));
console.log(ar.join());
let array = ar2.concat(ar)
console.log(array);
console.log(ar2);
console.log(ar); */

/* console.log(Object.keys(js2))
console.log(Object.values(js2)) */

/* for(let i = 0; i < ar.length; i++){
    console.log(ar[i])
} */

/* for(let e in ar ){
    console.log(ar[e])
} */

/* for (let e of ar) {
    console.log(e)
    console.log(ar)
} */

/* for(let property in js2){
    console.log(property+' : ' + js2[property])
} */

const ar3 = [
    {name:'Daniel', last_name:'iriarte'},
    {name: 'johan',last_name: 'cruz'}
]
console.log(ar3.map((i)=> i.name))

