
export const facturas=[
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
export const buscarPorId =(id)=>{
    const filtrarPorId = facturas.filter(f=> f.id===id);
    console.log(filtrarPorId);
}
export default (id)=>{
    const filtrarPorId = facturas.filter(f=> f.id===id);
    console.log(filtrarPorId);
}
export const buscarPorIdPromesa = (id)=>{
    return facturas.find(f=>f.id===id);
}
