import {facturas,buscarPorId} from './datos/facturas';
//find retorna un objeto que buscamos segun la condicion
const findByIdFactura = facturas.find(f=>{
    if(f.id==3){
        return f;
    }
})
// otra manera de usar el find
console.log(findByIdFactura);
const findByNombre = facturas.find(f=> f.nombre==='compra cigarrillos')

//filtrar

const filtrarPorId = facturas.filter(f=> f.id>1);
console.log(filtrarPorId);
/*
const filtrarPorProducto = facturas.filter(f => f.items.includes({
    producto: "lucky",
                precio: 100,
                cantidad:2
}))
console.log(filtrarPorProducto);
*/

// some devuelte un boolean
const resultado = facturas.some(f=> f.cliente.nombre==='camila');
console.log(resultado);
//exportado de facturas
console.log('buscar por id');
buscarPorId(1);