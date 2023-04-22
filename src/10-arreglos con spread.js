const productos =['mesa', 'silla','teclado'];
console.log(productos);
productos.push('pantalla', 'mouse');
const frutas =['pera','manzana','banana'];
// para concatenar
let mercaderias =[... frutas, ...productos, 'lechugas', 'papas'];
console.log(frutas);
console.log(productos);
console.log(mercaderias);
// otra manera de concatenar
 mercaderias = mercaderias.concat('asado', 'pollo')
 console.log(mercaderias);
