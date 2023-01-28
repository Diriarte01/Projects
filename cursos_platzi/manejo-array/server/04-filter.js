const array = [
    {
        "name": "Product 1",
        "price": 1001,
        "stock": 10
    },
    {
        "name": "Product 2",
        "price": 2000,
        "stock": 20
    }
]

const result = array.filter((element)=> element.price >= 1001 && element.stock >= 10);
console.log('resultado ',result);