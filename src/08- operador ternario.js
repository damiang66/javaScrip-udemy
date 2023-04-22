const promedio = 4.9;
let status2 = '';
if (promedio>=5.5){
    status2= 'aprobado'
}else{
    status2= 'desaprobado';
}
// es lo mismo de arriba pero mas simplificado
status2 =  (promedio>= 5.5)?'aprobado':'desaprobado';
console.log(status2);

let max=0;
const a =5;
const b =8;
const c=4;
max=a > b ? a : b;
max= max > c ? max : c;
console.log(`el mumero mayor es: ${max}`);