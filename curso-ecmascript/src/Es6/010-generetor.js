function* iterate(array){
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['Daniel', 'Dinessa','Maryaangel']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);