const list = new Set();
list.add('Daniel').add('Dinessa').add('Daniela').add('Danitza');
console.log(list);

list.add('Daniel');
console.log(list);

for ( let name of list ) {
    console.log(name);
}