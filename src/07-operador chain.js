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
console.log(factura.company?.name);
console.log(factura.cliente?.nombre);
if(factura.company?.name){
    console.log('perfecto');
}else{
    console.log('no viene el company');
}
