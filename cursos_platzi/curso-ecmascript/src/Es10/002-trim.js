const saludo = "      hola      "
const result1 = saludo.trim()
const result2 = saludo.trimStart()
const result3 = saludo.trimEnd()

console.log(result1) // 'hola'
console.log(result2) // 'hola      '
console.log(result3) // '      hola'