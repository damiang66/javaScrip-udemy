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
    total: 1000,
    saludar: function(){
        return `hola ${this.cliente.nombre}`
    }
};
console.log(factura);
console.log(factura.cliente.nombre);
factura.cliente.nombre='Pina'
console.log(factura.cliente.nombre);
const saludar = factura.saludar();
console.log(saludar);