const facturas=[
    {
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
       
    },
 {
        id: 2,
        nombre: 'compras  libreria',
        fecha: new Date(),
        cliente: {
            id:1,
            nombre: 'camila',
            apellido: 'Adamo',
            año: 40
        },
        items:[
            {
                producto: "papel",
                precio: 100,
                cantidad:2
            },
            {
                producto: "lapiz",
                precio: 50,
                cantidad:1
            },
            {
                producto: "goma",
                precio: 200,
                cantidad:1
            }
    
          ]  ,
       
    },
      {
        id: 3,
        nombre: 'compras cigarrillos',
        fecha: new Date(),
        cliente: {
            id:1,
            nombre: 'jose',
            apellido: 'Adamo',
            año: 40
        },
        items:[
            {
                producto: "lucky",
                precio: 100,
                cantidad:2
            },
            {
                producto: "camel",
                precio: 50,
                cantidad:1
            },
            {
                producto: "red poind",
                precio: 200,
                cantidad:1
            }
    
          ]  ,
       
    }
    
    
    
];
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