const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ray ban', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
];

const brands = products.map(products => products.brand);
console.log(brands);

const prices = products.map(products => products.price);
console.log(prices);


//dont return value: forEach
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))


//filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);