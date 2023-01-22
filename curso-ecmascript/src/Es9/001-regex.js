const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regex.exec('2018-04-20')
console.table(match)