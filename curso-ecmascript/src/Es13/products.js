import fetch from "node-fetch";

const respose = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await respose.json();

export { products };