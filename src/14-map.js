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
            nombre: 'Damian',
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
        nombre: 'compras  cigarrillos',
        fecha: new Date(),
        cliente: {
            id:1,
            nombre: 'Damian',
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
const items= facturas.map(f=>{
    return f.items;
})
console.log(items);

