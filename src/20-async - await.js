
const buscarClientePorId = async ()=>{
    const respuesta = await fetch('http://localhost:8080/api/cliente');
    const data = await respuesta.json();
   //console.log(data);
    return data;

}
const cliente = await buscarClientePorId();
console.log(cliente);