const factura ={
    id: 1,
    nombre: 'compras de oficina',
    fecha: new Date(),
    cliente: {
        id:1,
        nombre: 'Damian',
        apellido: 'Adamo',
        año: 40
    },
    items:[
        {
            producto: "teclado",
            precio: 100,
            cantidad:2
        },
        {
            producto: "mouse",
            precio: 50,
            cantidad:1
        },
        {
            producto: "monitor",
            precio: 200,
            cantidad:1
        }

      ]  ,
    total: function(){
        let total = 0;
        this.items.forEach(item=>{
            total= total + item.precio * item.cantidad;

        });
        return total
    },
    saludar: function(){
        return `hola ${this.cliente.nombre}`
    }
};
// esto realiza una copia de factura pero si modificamos se cambian los 2
//const factura2 = factura;
// de esta manera es como si hicieramos un new factura en java
const factura2 = {...factura};
const resultado = factura2===factura;

if (resultado)console.log(resultado);
else console.log('no son iguales');
factura2.id=20;
console.log(factura.id);
console.log(factura2.id);

