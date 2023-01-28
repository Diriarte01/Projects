const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]

const totales = orders.map(order => order.total)

console.log(totales)

// Modifica el array inicial order
const tarifas = orders.map(order => {
    order.tax = 0.19
    return order
})

console.log('orders', orders);

//Devuelve el array nuevo sin modificar el Inicial
const tarifas2 = orders.map(order => {
    return {
        ...order,
        item: 0.19,
    }
})

console.log(tarifas2)

const array = [
    {
        "name": "Product 1",
        "price": 1000,
        "stock": 10
    },
    {
        "name": "Product 2",
        "price": 2000,
        "stock": 20
    }
]

function addNewAttr(array) {
    return array.map((item) => {
      const taxes = parseInt(item.price * 0.19);
      console.log(taxes)
      return {...item,taxes }     
    })
}
const newArray = addNewAttr(array);

console.log(newArray)