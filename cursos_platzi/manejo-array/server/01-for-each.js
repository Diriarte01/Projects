
const letters = ['A','B','C','D','E','F'];

//For of
console.log('\n /**For of**/ \n');
for (const letter of letters) {
    console.log(letter);
}

// for in

console.log('\n /**For in**/ \n');
for (const letter in letters) {
    console.log(letters[letter]);
}

console.log('\n /**For Tradicional**/ \n');
for(let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}

console.log('\n /**For each**/ \n');
letters.forEach((letter) => console.log(letter))

const app = document.querySelector('.app');

letters.forEach((letter) =>{
    let p = document.createElement('p');
    p.innerText = letter;
    app.appendChild(p);
})
