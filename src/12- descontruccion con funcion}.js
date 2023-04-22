const usuarios={
    username:'damian',
    email:'damiang66@gmail.com',
    edad:40
}
// esto es sin funcion
const {username,email} = usuarios;
console.log(username);
console.log(email);
// para realizarlo con funcion

const detalle =(usuarios)=>{
    const{username,edad} = usuarios;
    console.log(`el detalle del usuario es ${username} y la edad es ${edad}`);

}
detalle(usuarios);
