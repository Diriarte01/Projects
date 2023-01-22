const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
console.log(mensaje.replace("JavaScript", "Python"))
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python")
console.log(mensaje.replaceAll("JavaScript", "Python"))
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*")
console.log(mensaje.replaceAll(/a/g, "*"))