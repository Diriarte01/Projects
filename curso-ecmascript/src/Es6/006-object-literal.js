// enahced object literals
const newUser = ((user, age, country) => { return { user,age,country } }) 

let users = newUser ('Daniel',35, 'MX')
console.log (users)