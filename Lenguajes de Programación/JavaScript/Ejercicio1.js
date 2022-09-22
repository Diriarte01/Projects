var array = [1,30,20,75,100,28,90];
var max = 0;
for (var i = 0; i < array.length; i++) {
    max = max < array[i] ? array[i] : max ;
}
console.log(max);