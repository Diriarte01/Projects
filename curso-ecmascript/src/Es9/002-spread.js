const user = { username: 'Daniel', age:30, country: 'CO'}
const { username, ...values } = user;

console.log(username.length);
console.log(values);