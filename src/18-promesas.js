import  {buscarPorIdPromesa} from './datos/facturas';

/*
promesa.then((result)=>{
    console.log(result);
}).catch((error=>{
    console.log(error);
}))
*/
const findFacturaPorId =(id)=>{
    const promise = new Promise((resolve,reject)=>{
        //simulamos un tiempo de espera
        setTimeout(()=>{
            const resultado = buscarPorIdPromesa(id);
            //console.log(resultado);
            //console.log('realizando alguna tarea con demora')
            if(resultado){
                resolve(resultado)
            }
            reject('error no existe la factura')
            
        },2500);
        
        
        })
        return promise;
}
findFacturaPorId(2).then(console.log).catch(console.log)

