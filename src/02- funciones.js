function decirHola(nombre = 'pepe', apellido='Adamo'){
   // console.log('hola desde una funcion');
   return `hola desde la funcion ${nombre} ${apellido}`
}
const respuesta = decirHola('damian', 'adamo');

//console.log(decirHola());
console.log(respuesta);
const funcionFlecha = (nombre)=>`hola desde la funcion de flecha ${nombre}`;
const suma= (a,b)=> a+b  ;
console.log(suma(1,20));

console.log(funcionFlecha('Pina'));
