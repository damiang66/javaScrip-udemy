const usuarios =['damian', 'camila', 'jose', 'fran'];
const [yo,hijaDelMedio,hijaMayor,hijaMenor]= usuarios;
console.log(yo);
console.log(hijaMayor);

const ejemplo =['a','b','c'];
const [a,,c] = ejemplo
console.log(a);
console.log(c);

const ejemplo2 =['a','b','c','d','e','f'];
const [x,,z,...resto]= ejemplo2
console.log(resto);
