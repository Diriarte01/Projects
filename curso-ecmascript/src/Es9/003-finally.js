const anothherFuncion = () => {
    return new Promise((resolv, reject) => {
        if (false) {
            resolv('Hey!!')
        } else {
            reject('whooops!')
        }
    })
}

anothherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('finalizo'));


async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const generador = anotherGenerator()
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))
generador.next().then(respuesta => console.log(respuesta.value))

async function forAwait() {
    const nombres = ["Alexa", "Oscar", "David"]
    for await(let valor of nombres) {
        console.log(valor)
    }
}

forAwait()
console.log('hola')