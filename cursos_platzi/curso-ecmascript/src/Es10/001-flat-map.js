const array = [1,2,[3,4],5,6]
console.log(array.flat(2)) 


const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
console.log(result2)// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
console.log(result3)// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
console.log(result4)// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]