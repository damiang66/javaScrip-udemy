// manipulando html
const buscarClientePorId = async ()=>{
    const respuesta = await fetch('http://localhost:8080/api/cliente');
    const data = await respuesta.json();
    const ul = document.createElement('ul');
   data.forEach(cliente =>{
    const li = document.createElement('li');
    li.innerText = cliente.nombre;
    ul.append(li)
    console.log(cliente.nombre);
   })
   document.getElementById('root').append(ul)
}
buscarClientePorId();
//console.log(cliente);