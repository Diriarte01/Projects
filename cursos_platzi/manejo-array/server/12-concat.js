const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const result1 = numbers1.concat("hola", "mundo")
const result2 = numbers1.concat(numbers2)
const result3 = numbers1.concat(numbers2, "hola")
const result4 = numbers1.concat(numbers2, numbers3)
console.log('resuelt1',result1);
console.log('result2',result2);
console.log('result3',result3);
console.log('result4',result4);