// una api rest creada por mi en el proyecto de api rest con angular
const http=fetch('http://localhost:8080/api/cliente');
/*
http.then(respuesta=>{
   respuesta.json().then(data=>{
    console.log(data);
   })
})
*/
http
.then(respuesta=>respuesta.json())
.then(data=>console.log(data))