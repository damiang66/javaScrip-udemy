const productos =['mesa', 'silla','teclado'];
console.log(productos);
productos.push('pantalla', 'mouse');
console.log(productos);
productos.forEach(p=>{
    console.log(p);
})
// es lo mismo que arriba
console.log('!!!!!!!!!!!!!!!!!');
for (let p of productos){
    console.log(p);
}
